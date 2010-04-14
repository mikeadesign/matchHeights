/*
 * Match Heights Plugin
 * Match the heights of targeted elements
 * 
 * Version 1.3
 * Updated 4/7/2010
 * Copyright (c) 2010 Mike Avello
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Usage: $(object).matchHeights({
 *		minHeight: [optional],
 *		maxHeight: [optional]
 * });
 *
 */
(function($) {
	$.fn.matchHeights = function(settings) {
		settings = jQuery.extend(this,{
			minHeight: null, // optional minimum height setting
			maxHeight: null // optional maximum height setting, forced height instead of min-height
		}, settings);
	
		tallest = (settings.minHeight) ? settings.minHeight : 0;
		this.each(function() {
			if($(this).innerHeight() > tallest) {
				tallest = $(this).outerHeight();
				//bdr = $(this).outerHeight() - $(this).innerHeight();
			}
		});
		if((settings.maxHeight) && tallest > settings.maxHeight) tallest = settings.maxHeight;
		return this.each(function() {
			extra = $(this).innerHeight() - $(this).height();
			
			//if ($(this).outerHeight() - $(this).innerHeight() == 0)	
				extra = extra + ($(this).outerHeight() - $(this).innerHeight());
			
			($.browser.msie && $.browser.version == 6.0 || (settings.maxHeight)) ? $(this).css({'height': tallest - extra}) : $(this).css({'min-height': tallest - extra}); 
		});
	}
})(jQuery);