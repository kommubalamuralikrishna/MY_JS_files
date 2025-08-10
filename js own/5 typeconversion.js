let x="23";
console.log(x,typeof x);
x+=1;//1 is concatinated to x
console.log(x,typeof x);
x="23";
x=Number(x)
console.log(x,typeof x);
x+=1;//1 is added to x
console.log(x,typeof x);

x="0";
let y="0";
let z="0";
//type conversion of above 3
x=Number(x)
y=String(y)
z=Boolean(z)//gives true because 0 also string.if it consists empty string like "" then boolean value is false
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
z=""
z=Boolean(z)//false
console.log(z,typeof z);
let k="pizza"
console.log(k,typeof k);
k=Number(k);
console.log(k,typeof k);//k is not a number so it gives Nan
let s;
s=String(s);
console.log(s,typeof s);//it is undefined string



