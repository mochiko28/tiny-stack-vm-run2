F=require('fs')
T=Buffer.from('@QqDFJKO        IIIIIIIEIIIEIII III             `dd`@           EH              DDAD')
E=x=>{throw x}
L=_=>(r=[a+b,a-b,Math.imul(a,b),a/b,a%b,(A=a>>>0)/(B=b>>>0),A%B,-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,,a==b,a<b,A<B][o-16])-r!=0?E(4):D[s]=r
H=[_=>E(0),_=>E(a&255),_=>D[s]=Q[j++]??-1,Y=_=>(t=O+(o>80?String.fromCharCode(a):a))[65536]?E(11):O=t,Y,_=>b>>>8?E(6):M[b]=a,_=>a>>>8?E(6):D[s]=M[a],_=>D.set([b,D[s+2],a],s),_=>D[s+2]=a,_=>D.set([b,a],s),X=_=>D[s+1]=a,X,K=_=>D[s]=g,K,,,,,_=>(c=C.pop())||E(8),_=>C.push(c)>65?E(7):c=g&65535,J=_=>o<49|o<50==!a&&(c+=g),J,J]
for(d of F.readdirSync(I='/input/')){[P,Q]=['program','input'].map(f=>F.readFileSync(I+d+'/'+f+'.bin'))
M=new Int32Array(D=new Int32Array(256))
C=[O='']
try{for(c=s=n=j=0;n++<1e6;s+=v&3){(v=T[o=P[c]])>63||E(o+1?5:9)
if((c+=1+(m=1<<(v>>4&3)>>1))>P.length)E(9)
s<(p=v>>2&3)&&E(2)
if((s-=p)+(v&3)>256)E(3)
m&&(g=P.readIntLE(c-m,m))
a=D[s]
b=D[s+1];(H[o*69%70%56]||L)()}E(10)}catch(x){e=x}
F.mkdirSync(o='/output/'+d)
F.writeFileSync(o+'/stdout.bin',O,'latin1')
F.writeFileSync(o+'/exit.txt',e+'')}
