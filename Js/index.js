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

$(document).ready(function(){

    //Header fixed on scroll
    $(window).scroll(() => {
        let scroll = $(window).scrollTop();
        if(scroll >=50){
            $('#navbar').addClass('fixed-top');
        }
        else{
            $('#navbar').removeClass('fixed-top');
        }
    });
    //Btn Top
    $(window).scroll(() => {
        let scroll = $(window).scrollTop();
        //show btn
        if(scroll >= 100){
         $("#btnGoUp").show();   
        } else{
            $("#btnGoUp").hide();  
        }
    });
        //go up
    $("#btnGoUp").click(function(){
        console.log($('body,html'))
        $(window).scrollTop(0);
        return false;
    });

    
});
