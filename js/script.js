window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__menu');
    menuItem = document.querySelectorAll('.nav__item');
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.add('nav__menu_active');
    });

    exitBtn = document.querySelector('.nav__header__btn');

    exitBtn.addEventListener('click', () => {
        menu.classList.remove('nav__menu_active');
    });

    done = document.querySelector('.footer__done');
    form = document.querySelector('.footer__feedback');
    submitBtn = document.querySelector('.feedback__button');

    submitBtn.addEventListener('click', () => {
        form.classList.remove('footer-active');
        done.classList.add('footer-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav__menu_active');
        })
    })
})

// $(document).ready(function(){

//     $("a[href^='#']").click(function(){
//         const _href = $(this).attr("href");
//         $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//         return false;
//     });
// });