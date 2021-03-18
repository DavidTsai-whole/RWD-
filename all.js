

$(document).ready(function () {
    $('.phoneMenu').click(function (e) {
        e.preventDefault();
        $('.fa-bars').toggle();
        $('.fa-times').toggle();
        $('body').toggleClass('menu-show');
    });


    $('.pcMenu li').click(function (e) {
        $('body').toggleClass('menu-show');
        $('.fa-bars').toggle();
        $('.fa-times').toggle();
    })

    $('.scrollTop').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        let targetPos = $(target).offset().top;
        $('html,body').animate({ scrollTop: targetPos }, 1000);
    });

    $('.top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    })

    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop();
        let windowHei = $(window).height();

        $('.scrollTop').each(function () {
            let target = $(this).attr('href');
            let targetPos = $(target).offset().top;
            let targetHei = $(target).outerHeight();
            if (targetPos - 1 <= scrollPos && (targetPos + targetHei) > scrollPos) {
                $('.scrollTop').removeClass('active');
                $(this).addClass('active')
            } else {
                $(this).removeClass('active');
            }
        });

        $('.animate').each(function () {
            let thisPos = $(this).offset().top;
            if ((windowHei / 1.3 + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });
        $('.animate2').each(function () {
            let thisPos = $(this).offset().top;
            if ((windowHei / 1.3 + scrollPos) >= thisPos) {
                $(this).addClass('fadeX');
            }
        });
        $('.animate3').each(function () {
            let thisPos = $(this).offset().top;
            if ((windowHei / 1.3 + scrollPos) >= thisPos) {
                $(this).addClass('fadeX');
            }
        });
        if (scrollPos >= 50)
            $('.top').addClass('fadeIn');
        else
            $('.top').removeClass('fadeIn');
    });

});