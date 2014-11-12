$('#open-comment').on('click', function() {
	$(this).hide();
	$('#disqus_thread').show();
});

$(function() {
	$(window).on('load scroll', function() {
		if($(this).scrollTop() > 0)
			$('#up-link').show();
		else 
			$('#up-link').hide();
	})
});

$('#up-link').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

$(function() {
	var $allVideos = $(".js-fluid-iframe"),
	    $fluidEl = $(".post-content-block");
	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {
		$(this)
			.data('aspectRatio', this.height / this.width)
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');
	});
	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {
		var newWidth = $fluidEl.width();
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {
			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));
		});
	// Kick off one resize to fix all videos on page load
	}).resize();

});
