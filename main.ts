F=require('fs')
T=Buffer(` 1a$&*+/~~~~~~~~)))))))%)))%)))~)))~~${R='~~~~~~~~~~~'}@DD@ ${R}%(~~~${R}$$!$`)
E=x=>{throw x}
for(d of F.readdirSync(I='/input/')){[P,Q]=['program','input'].map(f=>F.readFileSync(I+d+`/${f}.bin`))
D=[M=[],C=[O='']]
try{for(c=s=n=j=0;n++<1e6;(s+=v&3)>256&&E(3)){(v=T[o=P[c]])<99||E(o&&5);g=(m=v-32>>4)&&P.readIntLE(c+1,m);c-=~m;(s-=v>>2&3)<0&&E(2)
a=D[s]
b=D[s+1]
o%83?o<3?D[s]=g:o<5?D[s+1]=a:o<6?D.splice(s,2,b,a):o<7?D[s+2]=a:o<8?D.splice(s,3,b,D[s+2],a):o<48?(r=[a+b,a-b,Math.imul(a,b),a/b,a%b,(A=a>>>0)/(B=b>>>0),A%B,-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,,a==b,a<b,A<B][o-16])*0+1?D[s]=r|0:E(4):o<51?o<49|o<50==!a&&(c+=g):o<52?C.push(c)>65?E(7):c=g&65535:o<53?(c=C.pop())||E(8):o<66?(o>64?b:a)>>>8?E(6):o<65?D[s]=M[a]|0:M[b]=a:o<82?(t=O+(o>80?String.fromCharCode(a):a))[65536]?E(11):O=t:D[s]=Q[j++]??-1:E(o&&a)}E(10)}catch(e){F.mkdirSync(o='/output/'+d);(W=F.writeFileSync)(o+'/stdout.bin',O,'latin1')
W(o+'/exit.txt',(1/e?e&255:9)+'')}}
