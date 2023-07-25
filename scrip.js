var ip=document.getElementById("input").value;

var inputstr="";
var btnip=document.querySelectorAll(".btn");
for(let i=0;i<btnip.length;i++){
    btnip[i].addEventListener('click',()=>{
        if(btnip[i].value!='=' && btnip[i].value!='C'){
        ip+=btnip[i].value;
        console.log(ip);
        document.getElementById("input").value=ip;
    }
    else if(btnip[i].value=='C'){
        ip="";
        document.getElementById("input").value=ip;
        }
    })
}

document.getElementById("result").addEventListener("click",()=>{
    document.getElementById("input").value=Math.round((eval(ip) + Number.EPSILON) * 100) / 100;
    ip=`${eval(ip)}`;
})