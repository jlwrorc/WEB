$(document).ready(function () {
    fnResize();
    var th_width = $(".news-module li").eq(0).width();
    var th_left = $(".news-module li").eq(0).offset().left;
    var slider_width = $(".news-slider").width();
    var slider_left = th_left + (th_width / 2) - slider_width / 2 - 10;
    $(".news-slider").css("left", slider_left);
    $(".news-module li").on("click", function () {
        var n = $(this).index();
        var th_width = $(this).width();
        var th_left = $(this).offset().left;
        var slider_width = $(".news-slider").width();
        var slider_left = th_left + (th_width / 2) - slider_width / 2;
        $(".news-slider").css("left", slider_left);
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".memberitem").hover(function () {
        $(this).children("img").toggle();
    }, function () {
        $(this).children("img").toggle();
    });



});

function mScroll(id) {
    var height=$(".news-title").height();
    $("html,body").stop(true);
    $("html,body").animate({ scrollTop: $("#" + id).offset().top-height }, 1000);
    return false;
}
function fnResize() {
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth >= 1920) {
        deviceWidth = 1920;
    }
    if (deviceWidth <= 750) {
        deviceWidth = 750;
    }
    document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px';
};
window.onresize = fnResize;
window.onscroll=showbtn;
function showbtn(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScroll>0){
        $("#goToTop").fadeIn();
    }else{
        $("#goToTop").fadeOut();
    }
}
function btnClick(btn){
    $("#"+btn).click();
}