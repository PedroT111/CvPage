//Animation title
const typed = new Typed('.typed',{
    strings:['Programador', 'FrontEnd / BackEnd '],
    typeSpeed: 120,
    startDelay: 0,
    backSpeed: 75,
    smartBackspace: true,
    backDelay: 0,
    loop: true,
    loopCount: false,
    cursorChar: '/',
    showCursor: false
});
//Header fixed
document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        if(window.scrollY >= 50){
            document.getElementById('navbar').classList.add('fixed-top');
            const navHeight = document.querySelector('navbar').offsetHeight;
            document.body.style.paddingTop = navHeight + 'px';
        } else{
            document.getElementById('navbar').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    })
});

//btn GoUp fixed
const btnUp = document.getElementById("btnGoUp");
console.log(btnUp.style);
const scroll = () => {
    console.log('hola')
    document.documentElement.scrollTop > 20 ? btnUp.style.display = 'block' : btnUp.style.display ='none';
};
window.onscroll = () => scroll();

const goUp = () => {
    document.documentElement.scrollTop = 0;
};

btnUp.addEventListener('click', goUp);