let count=document.getElementById("content").textContent;
count=Number(count)
document.getElementById("db").onclick=function(){
    count--;
    document.getElementById("content").textContent=count;
}
document.getElementById("ib").onclick=function(){
    count++;
    document.getElementById("content").textContent=count;
}
document.getElementById("rb").onclick=function(){
    count=0;
    document.getElementById("content").textContent=count;
}