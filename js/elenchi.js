"use strict";

$(function(){
	$(".tablesorter").tablesorter({
		theme: 'bootstrap',
		headerTemplate: '{content} {icon}',
		widgets : [ "uitheme", "zebra" ],
	});
});