$(document).ready(function () {
    $("#container").fullpage({
        sectionsColor: ['#333333', '#4BBFC3', '#7785b6', '#ffffff', '#ddfccc', '#ffffff', '#333333'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        // 'navigation': true,
        scrollOverflow:true,
        controlArrows: false,
        continuousVertical: true,
        // fixedElements:'header',
        paddingTop:113,
        menu: '#menu',
    });
    fnResize();
    // setInterval(function(){
    //     $.fn.fullpage.moveSectionDown();
    // }, 15000);
    setInterval(function () {
        $.fn.fullpage.moveSlideRight();
    }, 3000);
    // setInterval(function () {
    //     $(".memberitem").children("img:first-child").fadeToggle();
    // }, 3000);
    // var height = $("#menu").height();
    // alert(height);
    // $(".section").css("padding-top", height);
});

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
$(".memberitem").hover(function () {
    $(this).children("img:first-child").fadeIn();
}, function () {
    $(this).children("img:first-child").fadeOut();
})