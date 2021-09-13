var DscrTerm = document.querySelectorAll(".sec5 dl dt");
var DscrDetails = document.querySelectorAll(".sec5 dl dd");
var arrD = document.getElementsByClassName("arrD");

for (let i = 0; i < DscrTerm.length; i++) {
    DscrTerm[i].addEventListener('click', ()=>{
        if(DscrDetails[i].style.height === DscrDetails[i].scrollHeight + "px"){
            DscrDetails[i].style.height = 0;
            arrD[i].style.transform = "rotate(0deg)";
        }else{
            DscrDetails[i].style.height = DscrDetails[i].scrollHeight + "px";
            arrD[i].style.transform = "rotate(-180deg)";
        };
    });    
};