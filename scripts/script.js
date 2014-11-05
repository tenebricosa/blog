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