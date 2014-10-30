$("#button-to-main").hover(
    function () {
        $(this).removeClass('front').addClass('back');
    },
    function () {
        $(this).removeClass('back').addClass('front');
    }
);