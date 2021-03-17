

$(document).ready(function () {
    $('.phoneMenu').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });

    /*
        $('.pcMenu li').click(function (e) {
            e.preventDefault();
            $('body').toggleClass('menu-show');
        })
    */
    $('.scrollTop').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        let targetPos = $(target).offset().top;
        $('html,body').animate({ scrollTop: targetPos }, 1000);
    });

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
                $(this).addClass('fadeLeft');
            }
        });
        $('.animate3').each(function () {
            let thisPos = $(this).offset().top;
            if ((windowHei / 1.3 + scrollPos) >= thisPos) {
                $(this).addClass('fadeRight');
            }
        });
    });

});