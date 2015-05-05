$(document).ready(function(){

	$("#nav").on("mouseover", function(){
		$(this).addClass("hover-see");
	});
	$("#nav").on("mouseleave", function(){
		$(this).removeClass("hover-see");
	});

});