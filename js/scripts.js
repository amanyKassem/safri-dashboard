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


    // upload documentation photo text

    $('.uploadFile').change(function() {
        var i = $(this).prev('.custom-file-upload').clone();
        var file = $(this)[0].files[0].name;
        $(this).prev('#docPhoto').attr('placeholder',file);
    });


    // ADD IMAGE
    $('.imageUploader').change(function (event){
        $(this).parents('.imagesUploadBlock').append('<div class="uploadedBlock"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close"><i class="fas fa-times"></i></button></div>');
    });

    // REMOVE IMAGE
    $('.dropBox').on('click', '.close',function (){
        $(this).parents('.textCenter').remove();
    });

    $(".clickAdd").click(function (b){
        b.preventDefault();
        $('.dropBox').append('<div class="textCenter">' + '<div class="imagesUploadBlock">' + '<label class="uploadImg">' + '<span><i class="far fa-image"></i></span>' + '<input type="file" accept="image/*" class="imageUploader">' + '</label>' + '</div>' + '</div>');

        $('.imageUploader').change(function (event){
            $(this).parents('.imagesUploadBlock').append('<div class="uploadedBlock"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close"><i class="fas fa-times"></i></button></div>');
        });
        $('.dropBox').on('click', '.close',function (){
            $(this).parents('.textCenter').remove();
        });

    });


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