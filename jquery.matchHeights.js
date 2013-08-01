/*
 * Match Heights jQuery Plugin
 * 
 * Version 1.7.2 (Updated 7/31/2013)
 * Copyright (c) 2010-2013 Mike Avello
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
(function($) {
	$.fn.matchHeights = function(settings) {
		settings = jQuery.extend(this,{
			minHeight: null,		// Optional minimum height setting
			maxHeight: null,		// Optional maximum height setting, forced height instead of min-height
			extension: 0,			// Optional amount to add to calculated height
			overflow: null,			// Option to enable overflow. Default overflow attribute not set
			includeMargin: false	// Optional Setting to include margin within calculations for alignment. Default is false.
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
			var extra = padding + ( element.outerHeight( settings.includeMargin ) - element.innerHeight() );
			if ( settings.overflow ) {
				element.css({'height': tallest - extra + extension, 'overflow': settings.overflow});
			} else {
				element.css({'min-height': tallest - extra + extension}); 
			};
		});
	}
})(jQuery);