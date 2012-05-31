/*
 * Match Heights jQuery Plugin
 * 
 * Version 1.7alpha (Updated 5/30/2012)
 * Copyright (c) 2010-2012 Mike Avello
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
(function($) {
	$.fn.matchHeights = function(settings) {
		settings = jQuery.extend(this,{
			minHeight: null,	// optional minimum height setting
			maxHeight: null,	// optional maximum height setting, forced height instead of min-height
			extension: 0,		// optional amount to add to calculated height
			overflow: false		// optional setting for overflow. Default is false; overflow attribute not set
		}, settings);
		
		var extension = settings.extension;
		var tallest = (settings.minHeight) ? settings.minHeight : 0;
		
		this.each(function() {			
			tallest = Math.max(tallest, $(this).outerHeight()  );
		});
		
		if ( settings.maxHeight && (tallest > settings.maxHeight) ) {
			tallest = settings.maxHeight;
		};
		
		return this.each(function() {
			var element = $(this);
			var padding = element.innerHeight() - element.height();
			var extra = padding + ( element.outerHeight() - element.innerHeight() );
			if ( $.browser.msie && $.browser.version == 6.0 || (!settings.overflow == false) ) {
				element.css({'height': tallest - extra + extension, 'overflow': settings.overflow});
			} else {
				element.css({'min-height': tallest - extra + extension}); 
			};
		});
	}
})(jQuery);
