/*
 * Match Heights Plugin
 * Match the heights of selected elements
 * 
 * Version 1.6
 * Updated 1/6/2011
 * Copyright (c) 2010-2011 Mike Avello
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Usage: 
 * $(object).matchHeights({
 *		minHeight: null, // optional minimum height setting
 *		maxHeight: null, // optional maximum height setting, forced height instead of min-height
 *		overflow: false // sets overflow to be hidden. Default is false; overflow attribute not set
 * });
 *
 */
(function($) {
	$.fn.matchHeights = function(settings) {
		settings = jQuery.extend(this,{
			minHeight: null, // optional minimum height setting
			maxHeight: null, // optional maximum height setting, forced height instead of min-height
			overflow: false // sets overflow to be hidden. Default is false; overflow attribute not set
		}, settings);
	
		tallest = (settings.minHeight) ? settings.minHeight : 0;
		this.each(function() {
			if($(this).innerHeight() > tallest) {
				tallest = $(this).outerHeight();
			}
		});
		if((settings.maxHeight) && tallest > settings.maxHeight) tallest = settings.maxHeight;
		return this.each(function() {
			padding = $(this).innerHeight() - $(this).height();
			extra = padding + ($(this).outerHeight() - $(this).innerHeight());
			($.browser.msie && $.browser.version == 6.0 || (!settings.overflow == false)) ? $(this).css({'height': tallest - extra, 'overflow': settings.overflow}) : $(this).css({'min-height': tallest - extra}); 
		});
	}
})(jQuery);