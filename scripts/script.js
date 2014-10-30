$(".post-header__button-to-main-block").hover(
    function () {
        $(this).removeClass('front').addClass('back');
    },
    function () {
        $(this).removeClass('back').addClass('front');
    }
);