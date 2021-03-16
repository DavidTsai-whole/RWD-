

$(document).ready(function () {
    $('.phoneMenu').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
     
    $('.scrollTop').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let targetPos = $(target).offset().top;
        $('html,body').animate({scrollTop:targetPos},1000);
    });

    $(window).scroll(function(){
        let scrollPos = $(window).scrollTop();
        $('.scrollTop').each(function(){
            let target = $(this).attr('href');
            let targetPos = $(target).offset().top;
            let targetHei = $(target).outerHeight();
            console.log(target,targetPos,targetHei)
            if(targetPos <= scrollPos && (targetPos +targetHei)>scrollPos){
                console.log('ya')
            }
        });
    });

})