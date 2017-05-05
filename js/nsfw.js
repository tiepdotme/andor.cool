/*
 * Challanged myself to write an IE7 compatible vanilla JS solution.
 *
 * Funny tough, that querySelector and querySelectorAll are supported in IE7,
 * but getElementsByClassName is not.
 *
 * Andor Polgar 2017
 */

(function() {
	var NSFW_COINTAINER_SELECTOR = '.nsfw';
	var NSFW_BUTTON_SELECTOR = '.nsfw__button';
	var NSFW_SHOW_CLASS = 'nsfw--show';
	var NSFW_SHOW_EVENT = 'click';

	var nsfwPhotos = document.querySelectorAll(NSFW_COINTAINER_SELECTOR);

	var showEventHandler = function() {
		if (this.className.indexOf(NSFW_SHOW_CLASS) !== -1) {
		 	return;
		}
		this.className += ' ' + NSFW_SHOW_CLASS;
	};

	for (var i = 0; i < nsfwPhotos.length; i++) {
		var container = nsfwPhotos[i];
		if (container.addEventListener) {
			container.addEventListener(NSFW_SHOW_EVENT, showEventHandler);
		}
		else if (container.attachEvent) {
			container.attachEvent(NSFW_SHOW_EVENT, showEventHandler);
		}
	}
})();
