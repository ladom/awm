$(document).ready(function() {
	$("area").hover(function() {
		var href=$(this).attr("href");
		$(href).fadeIn(100);
	}, function() {
		var href=$(this).attr("href");
		$(href).fadeOut(200);
	});

	$("#breast-area").click(function() {
		$('.treatments-text').hide();
		$('#breast-text').fadeToggle(2000);
	});
	$("#hair-area").click(function() {
		$('.treatments-text').hide();
		$('#hair-text').fadeToggle(2000);
	});
	$("#hands-area").click(function() {
		$('.treatments-text').hide();
		$('#hands-text').fadeToggle(2000);
	});
	$("#face-area").click(function() {
		$('.treatments-text').hide();
		$('#face-text').fadeToggle(2000);
	});
	$("#neck-area").click(function() {
		$('.treatments-text').hide();
		$('#neck-text').fadeToggle(2000);
	});
	$("#legs-area").click(function() {
		$('.treatments-text').hide();
		$('#legs-text').fadeToggle(2000);
	});
	$("#torse-area").click(function() {
		$('.treatments-text').hide();
		$('#torse-text').fadeToggle(2000);
	});
});