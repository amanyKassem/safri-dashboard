$(document).ready(function () {

    // toggle menu
    $("header .toggle").click(function () {
        $(".overlay").css({
            "transform": "scaleX(1)"
        });

        $(".menu").addClass('ulDir');

    });

    $("header .overlay").click(function () {
        $(this).removeAttr("style");
        $(".menu").removeClass("ulDir");
    });

    // toggle dashboard menu

    $("header .toggleSideMenu").click(function () {
        $(".dashContent .sideMenu").toggleClass('ulDir');
        $(".content").toggleClass('w-78 w-100');

    });

    // side menu li active
    // $(".mainUl li a").click(function () {
    //     $(this).parent().addClass("active").siblings().removeClass("active");
    // });


    // sub menu
    // $('.sub-menu ul').hide();
    // $(".sub-menu a").click(function () {
    //     $(this).parent(".sub-menu").children("ul").slideToggle("100");
    // });

    //scroll top
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.fadeIn(1000);
        } else {
            scrollButton.fadeOut(1000);
        }
    });

    //click to scroll top
    scrollButton.click(function () {
        $('html,body').animate({scrollTop: 0}, 600);
    });

});

/* loading screen */
$(window).on('load', function () {

    $(".layer-preloader").fadeOut(700, function () {

        $(".lds-dual-ring").delay(1000).fadeOut(700);

        $("body").css("overflow-y", "auto");

    });

});