(function(){
	'use strict';
	$('aside > h1').click(function() {
		$(this).next().slideToggle('slow');
	});
})();