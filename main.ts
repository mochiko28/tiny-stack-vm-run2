F=require('fs')
T=Buffer.from('01146:;?        999999959995999 999             04400           58              4414')
for(d of F.readdirSync(I='/input/')){P=F.readFileSync(I+d+'/program.bin')
Q=F.readFileSync(I+d+'/input.bin')
M=new Int32Array(D=new Int32Array(256))
C=[]
O=''
c=s=n=j=0
e=(_=>{for(;n++<1e6;s+=v&3){if(!((v=T[o=P[c]])>47))return o+1?5:9
if((c+=1+(o<3?o*o:o>>2==12&&2))>P.length)return 9
if(s<(p=v>>2&3))return 2
if((s-=p)+(v&3)>256)return 3
a=D[s]
b=D[s+1]
switch(o){case 0:return 0
case 1:D[s]=P[c-1]<<24>>24;break
case 2:D[s]=P.readInt32LE(c-4);break
case 3:case 4:D[s+1]=a;break
case 5:D.set([b,a],s);break
case 6:D[s+2]=a;break
case 7:D.set([b,D[s+2],a],s);break
case 48:case 49:case 50:if(o<49|o<50==!a)c+=P.readInt16LE(c-2);break
case 51:if(C.push(c)>64)return 7;c=P.readUInt16LE(c-2);break
case 52:if((c=C.pop())==null)return 8;break
case 64:if(a>>>8)return 6;D[s]=M[a];break
case 65:if(b>>>8)return 6;M[b]=a;break
case 80:case 81:if((t=O+(o>80?String.fromCharCode(a):a))[65536])return 11;O=t;break
case 82:D[s]=Q[j++]??-1;break
case 83:return a&255
default:if((r=[a+b,a-b,Math.imul(a,b),a/b,a%b,(A=a>>>0)/(B=b>>>0),A%B,-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,,a==b,a<b,A<B][o-16])-r!=0)return 4;D[s]=r}}return 10})()
F.mkdirSync(o='/output/'+d)
F.writeFileSync(o+'/stdout.bin',O,'latin1')
F.writeFileSync(o+'/exit.txt',e+'')}
