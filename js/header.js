$(function(){
	$('body')
		.prepend("<div class='header_container'></div>");	
	$('.header_container').load('header.html', function(){
		$('.depth2').hide();
		$('.depth1 > li').hover(
			function(){
				$('.depth2')
					.stop()
					.slideDown(200);
			},
			function(){
				$('.depth2')
					.stop()
					.slideUp(200);
			}
		);		
	});
	
		
});