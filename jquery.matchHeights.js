/**
 * Match Heights Plugin
 * Match the heights of targeted elements
 * 
 * Version 1.2
 * Updated 12/17/2009
 * Copyright (c) 2009 Mike Avello
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 
 * Usage: $(object).matchHeights([minHeight], [maxHeight]);
 * Example 1: $(".cols").matchHeights(); Sets all objects to the same height.
 * Example 2: $(".cols").matchHeights(400); Sets all objects to at least 400px tall.
 * Example 3: $(".cols").matchHeights(100,300); at least 100 but no more than 300.
 * Example 4: $(".cols, .cols2").matchHeights();
 *
 */

(function($) {
	$.fn.matchHeights = function(minHeight, maxHeight) {
		tallest = (minHeight) ? minHeight : 0;
		this.each(function() {
			if($(this).height() > tallest) {
				tallest = $(this).height();
			}
		});
		if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
		return this.each(function() {
			extra = $(this).outerHeight() - ($(this).innerHeight() -  parseInt($(this).css("padding-top")) - parseInt($(this).css("padding-bottom")));
			($.browser.msie && $.browser.version == 6.0) ? $(this).css({'height': tallest - extra}) : $(this).css({'min-height': tallest - extra}); 
		});
	}
})(jQuery);