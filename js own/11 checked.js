const cb=document.getElementById("cb");
const card=document.getElementById("card");
const phnpay=document.getElementById("phnpay");
const bt=document.getElementById("bt");
const matter=document.getElementById("matter");
const matter2=document.getElementById("matter2");

bt.onclick=function(){
    if(cb.checked){
        matter.textContent=`you are subscribed`
    }
    else{
        matter.textContent=`you are not subscribed`
    }
    if(card.checked){
        matter2.textContent=`you pay card`;
    }
    else{
        matter2.textContent=`you pay phn pay`;
    }
}
