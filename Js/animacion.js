let animado = document.querySelectorAll(".animado");

function showUp(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i<animado.length; i++){
        let offSet = animado[i].offsetTop;
        let correctOffset = offSet - 330;
        if(correctOffset < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("showUp");
        }
    }
    
}
window.addEventListener('scroll', showUp);
