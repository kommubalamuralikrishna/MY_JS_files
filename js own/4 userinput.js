//how to accept user input in js
//1.eady way=window prompt
//2.professional way=html textbox

//1st way:
/*
let username;
username=window.prompt("what is your usernme:");
console.log(username);
*/
//2nd way
document.getElementById("id2").onclick=function(){
    let username=document.getElementById("id1").value;
    console.log(username);
    document.getElementById("id3").textContent=`hello ${username}`;
}