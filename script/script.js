let hdr = document.getElementById("hdr");
let img1 = document.querySelector(".logo1 img");
let he2 = document.querySelector("hgroup h2");
let he3 = document.querySelector("hgroup h3");

function bigScrTop(){
    hdr.style.padding = "30px 3vw 30px 2.2vw";
    hdr.style.boxShadow = "0px 4px 10px #888888";
    img1.style.width = "62px";
    he2.style.fontSize = "41px";
    he3.style.fontSize = "22px";
    he3.style.fontWeight = "600";
};
function bigScrScr(){
    hdr.style.padding = "6px 3vw 6px 2.2vw";
    hdr.style.boxShadow = "0px 3px 12px #888888";
    img1.style.width = "42px";
    he2.style.fontSize = "31px";
    he3.style.fontSize = "17px";
    he3.style.fontWeight = "900";
};
function smScrTop(){
    hdr.style.padding = "0 2vw 40px 2vw";
    img1.style.width = "36px";
    he2.style.fontSize = "28px";
    he3.style.fontSize = "16px";
    he3.style.fontWeight = "900";
};
function smScrScr(){
    hdr.style.padding = "0 2vw 40px 2vw";
    img1.style.width = "36px";
    he2.style.fontSize = "28px";
    he3.style.fontSize = "16px";
    he3.style.fontWeight = "900";
};

function headTrans(){
    if (window.innerWidth >= 768 && window.pageYOffset <= 20){bigScrTop();} // big screen, top
    if (window.innerWidth >= 768 && window.pageYOffset > 20){bigScrScr();} // big screen, scroll
    if (window.innerWidth < 768 && window.pageYOffset <= 20){smScrTop();} // small screen, top
    if (window.innerWidth < 768 && window.pageYOffset > 20){smScrScr();} // small screen, scroll
};

["load", "resize", "scroll"].forEach(item => addEventListener(item, ()=>{headTrans();}));



// oh.html
var zone = document.querySelectorAll('.all-objections>li');
var textZone = document.querySelectorAll('.all-objections>li>article');
var header1 = document.querySelector('.sec5>h1');

for (let i = 0; i < zone.length; i++) {
    zone[i].addEventListener('click', ()=>{
        header1.scrollIntoView();
        for (let g = 0; g < zone.length; g++) {
            zone[g].classList.remove('clicked');
            zone[g].style.order = "2";
            textZone[g].style.height = '0px';
        }
        zone[i].classList.add('clicked');
        textZone[i].style.height = 'initial';
    });
};