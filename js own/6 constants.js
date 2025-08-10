//constants are cannot be changed at middle of the code once declared
//use capital letter for constants
const PI=3.14;
let radius;
let circumference;
document.getElementById("mysubmit").onclick=function(){
    radius=document.getElementById("i/p").value;
    radius=Number(radius)
    circumference=2*PI*radius;
    document.getElementById("print").textContent=`circumference of the circle is ${circumference}`;
}