let bars = document.querySelector(".smallH .fa-bars");
let xmark = document.querySelector(".smallH .fa-xmark") ;
xmark.style.display = 'none' ;
bars.onclick = function(){
    bars.style.display = 'none' ;
    xmark.style.display = 'block' ;
    document.querySelector(".smallH ul").style.display = 'block' ;
    document.querySelector(".smallH .logo .text").style.display = 'block' ;
}
xmark.onclick = function(){
    bars.style.display = 'block' ;
    xmark.style.display = 'none' ;
    document.querySelector(".smallH ul").style.display = 'none' ;
    document.querySelector(".smallH .logo .text").style.display = 'none' ;
}