// A VM for make.fun's tiny stack ISA (kit: program/generator/subject/ISA.md); runs /input/<id>/ to /output/<id>/.
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';

// Per opcode: immediate bytes, pops, pushes. Unlisted bytes are unknown opcodes.
const T: Record<number, [number, number, number]> = {
  0: [0, 0, 0], 1: [1, 0, 1], 2: [4, 0, 1], 3: [0, 1, 0], 4: [0, 1, 2], 5: [0, 2, 2], 6: [0, 2, 3], 7: [0, 3, 3],
  0x17: [0, 1, 1], 0x1b: [0, 1, 1], 0x30: [2, 0, 0], 0x31: [2, 1, 0], 0x32: [2, 1, 0], 0x33: [2, 0, 0],
  0x34: [0, 0, 0], 0x40: [0, 1, 1], 0x41: [0, 2, 0], 0x50: [0, 1, 0], 0x51: [0, 1, 0], 0x52: [0, 0, 1],
  0x53: [0, 1, 0],
};
for (const o of [0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x18, 0x19, 0x1a, 0x1c, 0x1d, 0x1e, 0x20, 0x21, 0x22])
  T[o] = [0, 2, 1];

function run(p: Uint8Array, inp: Uint8Array): [number[], number] {
  const n = p.length, D = new Int32Array(257), M = new Int32Array(256), C: number[] = [], out: number[] = [];
  let sp = 0, pc = 0, steps = 0, ip = 0;
  for (;;) {
    if (steps == 1e6) return [out, 10];
    const o = p[pc];
    if (o == null) return [out, 9];
    const t = T[o];
    if (!t) return [out, 5];
    const [imm, pops, pushes] = t;
    if (pc + imm >= n) return [out, 9];
    steps++;
    if (sp < pops) return [out, 2];
    if (sp - pops + pushes > 256) return [out, 3];
    const next = pc + 1 + imm;
    pc = next;
    const b = D[sp - 1], a = D[sp - 2];
    switch (o) {
      case 0: return [out, 0];
      case 1: D[sp++] = (p[next - 1] << 24) >> 24; break;
      case 2: D[sp++] = p[next - 4] | (p[next - 3] << 8) | (p[next - 2] << 16) | (p[next - 1] << 24); break;
      case 3: sp--; break;
      case 4: D[sp++] = b; break;
      case 5: D[sp - 1] = a; D[sp - 2] = b; break;
      case 6: D[sp++] = a; break;
      case 7: { const x = D[sp - 3]; D[sp - 3] = a; D[sp - 2] = b; D[sp - 1] = x; break; }
      case 0x17: D[sp - 1] = -b; break;
      case 0x1b: D[sp - 1] = ~b; break;
      case 0x30: case 0x31: case 0x32: {
        const rel = ((p[next - 2] | (p[next - 1] << 8)) << 16) >> 16;
        if (o == 0x30 || (o == 0x31) == !D[--sp]) pc = next + rel;
        break;
      }
      case 0x33:
        if (C.length == 64) return [out, 7];
        C.push(next); pc = p[next - 2] | (p[next - 1] << 8); break;
      case 0x34:
        if (!C.length) return [out, 8];
        pc = C.pop()!; break;
      case 0x40: if (b < 0 || b > 255) return [out, 6]; D[sp - 1] = M[b]; break;
      case 0x41: if (b < 0 || b > 255) return [out, 6]; M[b] = a; sp -= 2; break;
      case 0x50: {
        const s = String(b);
        if (out.length + s.length > 65536) return [out, 11];
        for (const ch of s) out.push(ch.charCodeAt(0));
        sp--; break;
      }
      case 0x51: if (out.length >= 65536) return [out, 11]; out.push(b & 255); sp--; break;
      case 0x52: D[sp++] = ip < inp.length ? inp[ip++] : -1; break;
      case 0x53: return [out, b & 255];
      default: {
        let r: number;
        switch (o) {
          case 0x10: r = a + b; break;
          case 0x11: r = a - b; break;
          case 0x12: r = Math.imul(a, b); break;
          case 0x13: if (!b) return [out, 4]; r = a / b; break;
          case 0x14: if (!b) return [out, 4]; r = a % b; break;
          case 0x15: if (!b) return [out, 4]; r = (a >>> 0) / (b >>> 0); break;
          case 0x16: if (!b) return [out, 4]; r = (a >>> 0) % (b >>> 0); break;
          case 0x18: r = a & b; break;
          case 0x19: r = a | b; break;
          case 0x1a: r = a ^ b; break;
          case 0x1c: r = a << b; break;
          case 0x1d: r = a >> b; break;
          case 0x1e: r = a >>> b; break;
          case 0x20: r = +(a == b); break;
          case 0x21: r = +(a < b); break;
          default: r = +((a >>> 0) < (b >>> 0));
        }
        D[sp-- - 2] = r; // Int32Array store truncates toward zero and wraps mod 2^32
      }
    }
  }
}

for (const id of readdirSync('/input')) {
  const [out, code] = run(readFileSync(`/input/${id}/program.bin`), readFileSync(`/input/${id}/input.bin`));
  mkdirSync(`/output/${id}`);
  writeFileSync(`/output/${id}/stdout.bin`, Uint8Array.from(out));
  writeFileSync(`/output/${id}/exit.txt`, '' + code);
}
