
const swiper1 = new Swiper('#slider_finished', {
    loop: true,
    // autoplay: {
    //     delay: 3000,
    // },
    speed: 1000,
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    slidesPerView: 4,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 20,
            // navigation: {
            //     nextEl: '.btn_slider_next',
            //     prevEl: '.btn_slider_prev',
            // },
        }
    }
})

const swiper2 = new Swiper('#slider_feedback', {
    loop: true,
    // autoplay: {
    //     delay: 3000,
    // },
    speed: 1000,
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    breakpoints: {
        768: {
            navigation: {
                nextEl: '.btn_slider_next',
                prevEl: '.btn_slider_prev',
            },
        }
    }
    // slidesPerView: 2
    // effect: 'coverflow'
    // autoHeight: true
})

/**
 *
 * Бургер меню
 */
document.getElementById('burgerButton')?.addEventListener('click', e => {
    e.preventDefault();
    e.currentTarget.classList.toggle('active');
    document.querySelector('.header__navigation__list')?.classList.toggle('active');
})


