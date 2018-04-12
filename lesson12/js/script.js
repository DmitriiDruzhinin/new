$(document).ready(function(){

	$('.text-center').on('click', function(){
		$('.modal').slideDown( 500, "linear"),
		$('.overlay').fadeIn("slow");
	});

	$('nav li:eq(1)').on('click', function(){
		$('.modal').slideDown( 500, "linear"),
		$('.overlay').fadeIn("slow");
	});

	$('.close').on('click', function(){
		$('.modal').slideUp( 500, "linear"),
		$('.overlay').fadeOut("slow");
	});

});