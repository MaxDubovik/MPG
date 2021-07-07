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

    const animItems = document.querySelectorAll('._anim-items');  

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 8;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }                  
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        
        setTimeout(() => {
            animOnScroll();
        }, 300);    
    }
})

// $(document).ready(function(){

//     $("a[href^='#']").click(function(){
//         const _href = $(this).attr("href");
//         $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//         return false;
//     });
// });