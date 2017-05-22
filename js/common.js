$(document).ready(function () {

    $(".call").click(function (e) {
        e.preventDefault();
        $(".callback.popup").css("display", "block");
    });
    $(".close").click(function (e) {
        e.preventDefault();
        $(".popup").css("display", "none");
    });

    var scroll = function (e) {
        var id = "#" + $(e.target).attr("data-to");
        var mnuH = $('header .top-mnu').height();
        var top = $(id).offset().top - mnuH;
        $('body,html').animate({scrollTop: top}, 1500);
    };

    var increase = function (e) {
        $(this).find('.hover-img').toggleClass("big");
    };

    $('.top-mnu nav').on('click', scroll);
    $('#contact-us').on('click', scroll);
    $("#up").on('click', scroll);
    $('.hover-block').on('mouseenter mouseleave', increase);
});