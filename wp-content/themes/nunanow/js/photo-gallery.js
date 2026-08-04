// @codekit-prepend '../vendor/bower_components/flexslider/jquery.flexslider.js'

(function ($) {

	'use strict';

	$(document).ready(function () {
		$('.flexslider').flexslider({
			slideshow: false,
			directionNav: false,
			controlNav: 'thumbnails',
			animationSpeed: 300,
			allowOneSlide: false,
			fadeFirstSlide: false
		});
	});

})(jQuery);
