$(document).ready(function () {
    $('.slides-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
    });

    $('.material-body').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
    })

    $('.prize-list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    })

    $('.slick-product-home').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 1000,
        arrows: true,
        prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })

    $('.media-list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 1000,
        prevArrow: '<button class="arrow-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="arrow-next"><i class="fas fa-arrow-right"></i></button>',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })

    $('.post-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 1000,
        prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })

    $('.header-toggle').click(function () {
        $('.menu').toggleClass('active')
        $('body').toggleClass('noscroll')
    })

    $('.menu-item--close').click(function () {
        $('.menu').removeClass('active')
        $('body').removeClass('noscroll')
    });

    // refresh slickJS

    $(".nav-link").on("click", function () {
        $(".slick-product-home").slick("refresh");
    });

})

// const navLinks = document.querySelectorAll('.nav-link')
// const tabPanes = document.querySelectorAll('.product-pane')
// navLinks.forEach(function (btn, index) {
//     btn.addEventListener('click', function () {
//         tabPane = tabPanes[index]

//         document.querySelector('.nav-link.active').classList.remove('active');
//         document.querySelector('.product-pane.active').classList.remove('active');
//         document.querySelector('.product-pane.fade').classList.remove('fade');
//         document.querySelector('.product-pane.show').classList.remove('show');

//         this.classList.add('active');
//         tabPane.classList.add('active');
//         tabPane.classList.add('fade');
//         tabPane.classList.add('show');
//     })
// })