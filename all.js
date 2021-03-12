$(document).ready(function(){
    $('.phoneMenu').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('menu-show');
    })
})