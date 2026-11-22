F=require('fs')
T=Buffer(` 1a$&*+/~~~~~~~~)))))))%)))%)))~)))~~${R='~~~~~~~~~~~'}@DD@ ${R}%(~~~${R}$$!$`)
E=x=>{throw x}
L=_=>(r=[a+b,a-b,Math.imul(a,b),a/b,a%b,(A=a>>>0)/(B=b>>>0),A%B,-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,,a==b,a<b,A<B][o-16])-r!=0?E(4):D[s]=r
H=[_=>E(0),_=>E(a&255),_=>D[s]=Q[j++]??-1,Y=_=>(t=O+(o>80?String.fromCharCode(a):a))[65536]?E(11):O=t,Y,_=>b>>>8?E(6):M[b]=a,_=>(D[s]=M[a])??E(6),_=>D.set([b,D[s+2],a],s),_=>D[s+2]=a,_=>D.set([b,a],s),X=_=>D[s+1]=a,X,K=_=>D[s]=g,K,,,,,_=>(c=C.pop())||E(8),_=>C.push(c)>65?E(7):c=g&65535,J=_=>o<49|o<50==!a&&(c+=g),J,J]
for(d of F.readdirSync(I='/input/')){[P,Q]=['program','input'].map(f=>F.readFileSync(I+d+`/${f}.bin`))
M=(D=new Int32Array(256)).slice()
C=[O='']
try{for(c=s=n=j=0;n++<1e6;(s+=v&3)>256&&E(3)){(v=T[o=P[c]])<99||E(o&&5);g=(m=(v>>4)-2)&&P.readIntLE(c+1,m);c-=~m;(s-=v>>2&3)<0&&E(2);(H[o*69%70%56]||L)(a=D[s],b=D[s+1])}E(10)}catch(e){F.mkdirSync(o='/output/'+d);(W=F.writeFileSync)(o+'/stdout.bin',O,'latin1')
W(o+'/exit.txt',(e>-1?e:9)+'')}}
