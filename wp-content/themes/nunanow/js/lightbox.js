// @codekit-prepend '../vendor/bower_components/magnific-popup/dist/jquery.magnific-popup.js'

(function ($) {

	'use strict';

	$(document).ready(function () {
		$('.featured-image, .gallery').each(function () {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Loading image #%curr%&hellip;',
				mainClass: 'mfp-img-mobile',
				closeOnContentClick: true,
				closeBtnInside: false,
				showCloseBtn: true,
				autoFocusLast: false,
				removalDelay: 300, // Give time for animation.
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					titleSrc: function (item) {
						if ($(item.el).data('caption-title')) {
							return $(item.el).data('caption-title');
						}
						return $(item.el.context).next('figcaption').text();
					}
				},
				iframe: {
					// Include caption.
					markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						'</div>'+
						'<div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div>'
				},
				callbacks: {
					elementParse: function(item) {
						if ($(item.el).hasClass('foo-video')) {
							item.type = 'iframe';
						}
						else {
							item.type = 'image';
						}
					},
					markupParse: function(template, values, item) {
						if ($(template).hasClass('mfp-iframe-scaler')) {
							// Add contents to caption.
							values.title = $(item.el).data('caption-title');
						}
					},
					open: function () {
						var mfp = $.magnificPopup.instance;
						var proto = $.magnificPopup.proto;
						var arrowBack = this.arrowLeft;

						if (mfp.index < 1) {
							$(arrowBack).hide();
						}
						else {
							$(arrowBack).show();
						}

						// extend function that moves to next item
						mfp.next = function () {
							// if index is not last, call parent method
							if (mfp.index < mfp.items.length - 1) {
								$(arrowBack).fadeIn(300);
								proto.next.call(mfp);
							}
							else {
								mfp.close();
							}
						};
						mfp.prev = function () {
							if (mfp.index > 0) {
								proto.prev.call(mfp);
							}
							if (mfp.index < 1) {
								$(arrowBack).fadeOut(300);
							}
						};
					}
				}
			});
		});
	});

})(jQuery);
