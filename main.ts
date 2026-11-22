F=require('fs')
T=Buffer.from('@QqDFJKO        IIIIIIIEIIIEIII III             `dd`@           EH              DDAD')
L=_=>{if((r=[a+b,a-b,Math.imul(a,b),a/b,a%b,(A=a>>>0)/(B=b>>>0),A%B,-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,,a==b,a<b,A<B][o-16])-r!=0)throw 4;D[s]=r}
K=_=>D[s]=P.readIntLE(c-m,m)
X=_=>D[s+1]=a
J=_=>o<49|o<50==!a&&(c+=P.readIntLE(c-m,m))
Y=_=>{if((t=O+(o>80?String.fromCharCode(a):a))[65536])throw 11;O=t}
H=[_=>{throw 0},,J,K,,J,K,,J,X,,_=>{if(C.push(c)>65)throw 7;c=P.readUInt16LE(c-2)},X,,_=>{if(!(c=C.pop()))throw 8},_=>D.set([b,a],s),,,_=>D[s+2]=a,,,_=>D.set([b,D[s+2],a],s),,,,,,Y,,,Y,,,_=>D[s]=Q[j++]??-1,,,_=>{throw a&255},,,,,,,,,,,,,,_=>{if(a>>>8)throw 6;D[s]=M[a]},,,_=>{if(b>>>8)throw 6;M[b]=a}]
for(d of F.readdirSync(I='/input/')){[P,Q]=['program','input'].map(f=>F.readFileSync(I+d+'/'+f+'.bin'))
M=new Int32Array(D=new Int32Array(256))
C=[O='']
try{for(c=s=n=j=0;n++<1e6;s+=v&3){if(!((v=T[o=P[c]])>63))throw o+1?5:9
if((c+=1+(m=1<<(v>>4&3)>>1))>P.length)throw 9
if(s<(p=v>>2&3))throw 2
if((s-=p)+(v&3)>256)throw 3
a=D[s]
b=D[s+1];(H[o*3%71]||L)()}throw 10}catch(x){e=x}
F.mkdirSync(o='/output/'+d)
F.writeFileSync(o+'/stdout.bin',O,'latin1')
F.writeFileSync(o+'/exit.txt',e+'')}
