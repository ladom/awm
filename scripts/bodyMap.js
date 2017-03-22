$(document).ready(function() {
	$("area").hover(function() {
		var href=$(this).attr("href");
		$(href).fadeIn(100);
	}, function() {
		var href=$(this).attr("href");
		$(href).fadeOut(200);
	});
});