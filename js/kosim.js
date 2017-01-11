var kosim = {
	slides : [
		'img/photos/slider-1.jpg',
		'img/photos/slider-2.jpg'
	],

	init : function()
	{
		//set slider images
		this.setSlider();

		//init slider
		$('#slider').bxSlider({
			controls: false,
			mode: 'fade',
			auto: true,
			speed: 1000,
			pager: false
		});

		//init carousel logos
		$('#carousel').bxSlider({
			slideWidth: 'auto',
			minSlides: 2,
			maxSlides: 4,
			moveSlides: 1,
			slideMargin: 40,
			pager: false
		});

		//scroll
		this.scrollEffect();
	},

	onChangeHRFile : function(e) {
		var MSG = 'Carga tu CV (*.pdf o *.doc)';
		var input = e.target;
		console.log(input);

		var fileName = '';
		if(input.files && input.files.length >= 1)
		{
			var file = input.files[0];
			fileName = file.name;	
		}
		else
		{
			fileName = MSG;
		}
		
		var $placeholder = $('.placeholder');
		$placeholder.html(fileName)
	},

	scrollEffect : function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	},

	setSlider : function() {
		var $container = $('#slider');
		$container.html('');
		for(var i = 0; i < this.slides.length; i++) 
		{
			var slide = this.slides[i];
			var $li = $('<li>');
			var backgroundProp = 'url("' + slide + '") no-repeat center';
			$li.css('background',backgroundProp);
			$li.css('background-size','cover');
			$container.append($li);
		}
	}
};
{
	$(document).ready(function() {
		kosim.init();
	})	
}
