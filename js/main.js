const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// ! Jquery

$(document).ready(function(){
    $('#menu').click(function(){
        $('.nav-links').toggleClass('show');
    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    dh = $(document).height(),
    wh = $(window).height();

    scrollPercent = (scroll / (dh - wh)) * 100;

    $('#progressbar').css('height', scrollPercent + '%');
})

AOS.init();