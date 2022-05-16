
$(window).resize(function(event)  {
    adaptive_function();
});
function adaptive_header(w,h) {
    var headerMenu=$('.header-menu');
    var headerList=$('.menu__list');
    if(w<768){
        if(!headerList.hasClass ('done')){
            headerList.addClass('done').appendTo(headerMenu);
        }
    } else{
            if(headerList.hasClass('done')){
                headerList.removeClass('done').prependTo($('.header__menu'));
            }
        }
        

    }
    

function adaptive_function(){
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
    adaptive_header(w,h);
}
adaptive_function();
