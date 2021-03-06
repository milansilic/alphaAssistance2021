let hdr = document.getElementById("hdr");
let img1 = document.querySelector(".logo1 img");
let he2 = document.querySelector("hgroup h2");
let he3 = document.querySelector("hgroup h3");


function bigScrTop(){
    hdr.style.padding = "38px 4vw 38px 3vw";
    img1.style.width = "calc(50px + .8vw)";
    he2.style.fontSize = "45px";
    he2.style.textShadow = "0px 0px 4px #fff";
    he3.style.fontSize = "24px";
    he3.style.fontWeight = "500";
};
function bigScrScr(){
    hdr.style.padding = "8px 4vw 8px 3vw";
    img1.style.width = "calc(40px + .5vw)";
    he2.style.fontSize = "38px";
    he2.style.textShadow = "none";
    he3.style.fontSize = "20px";
    he3.style.fontWeight = "900";
};
function smScrTop(){
    hdr.style.padding = "38px 4vw 2px 3vw";
    img1.style.width = "calc(40px + .5vw)";
    he2.style.fontSize = "38px";
    he2.style.textShadow = "none";
    he3.style.fontSize = "20px";
    he3.style.fontWeight = "900";
};
function smScrScr(){
    hdr.style.padding = "38px 4vw 2px 3vw";
    img1.style.width = "calc(40px + .5vw)";
    he2.style.fontSize = "38px";
    he2.style.textShadow = "none";
    he3.style.fontSize = "20px";
    he3.style.fontWeight = "900";
};

function headTrans(event){
    // big screen, top
    if (window.innerWidth >= 768 && window.pageYOffset <= 20){bigScrTop();}
    // big screen, scroll
    if (window.innerWidth >= 768 && window.pageYOffset > 20){bigScrScr();} 
    // small screen, top
    if (window.innerWidth < 768 && window.pageYOffset <= 20){smScrTop();}
    // small screen, scroll
    if (window.innerWidth < 768 && window.pageYOffset > 20){smScrScr();}
};

window.addEventListener("scroll", headTrans, false);
window.addEventListener("resize", headTrans, false);