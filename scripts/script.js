$('.js-flip').hover(
    function () {
        $(this).removeClass('front').addClass('back');
    },
    function () {
        $(this).removeClass('back').addClass('front');
    }
);

$('#open-comment').on('click', function() {
	$(this).hide();
	$('#disqus_thread').show();
})

$('#up-link').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});