/**
 * FooGallery Grid Init Code.
 * Only initializes masonry when all images are loaded
 */

(function ($) {

	/**
	 * Small ready function to circumvent external errors blocking jQuery's ready.
	 * @param {Function} callback - The function to call when the document is ready.
	 */
	function nunanow_gallery_grid(callback) {
		var is_ie = Function('/*@cc_on return true@*/')();

		if (is_ie ? document.readyState === "complete" : document.readyState !== "loading") {
			callback();
		}
		else {
			setTimeout(function () { nunanow_gallery_grid(callback); }, 1);
		}
	}

	nunanow_gallery_grid(function () {
		$('.foogallery-grid').each(function () {
			var $gallery = $(this);
			$gallery.imagesLoaded( function () {
				$gallery.removeClass('foogallery-grid-loading');
				if ($gallery.data('masonry-options')) {
					$gallery.masonry( $gallery.data('masonry-options') );
				}
			});
		});
	});

})(jQuery);
