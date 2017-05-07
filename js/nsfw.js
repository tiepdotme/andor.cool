/*
 * Challanged myself to write an IE7 compatible vanilla JS solution.
 *
 * Funny tough, that querySelector and querySelectorAll are supported in IE7,
 * but getElementsByClassName is not.
 *
 * Andor Polgar 2017
 */

(function() {
	var NSFW_COINTAINER_SELECTOR = '.post__image--nsfw';
	var NSFW_REVEAL_EVENT = 'click';
	var NSFW_TAG = '_sfw';

	var nsfwPhotos = document.querySelectorAll(NSFW_COINTAINER_SELECTOR);

	var revealEventHandler = function() {
		if (this.src.indexOf(NSFW_TAG) === -1) {
		 	return;
		}
		this.src = this.src.replace(NSFW_TAG, '');
	};

	for (var i = 0; i < nsfwPhotos.length; i++) {
		var container = nsfwPhotos[i];
		if (container.addEventListener) {
			container.addEventListener(NSFW_REVEAL_EVENT, revealEventHandler);
		}
		else if (container.attachEvent) {
			container.attachEvent(NSFW_REVEAL_EVENT, revealEventHandler);
		}
	}
})();
