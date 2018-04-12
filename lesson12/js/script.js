$(document).ready(function(){

	$('.main_btna:eq(0)').on('click', function(){
		$('.modal').slideDown( 500, "linear"),
		$('.overlay').fadeIn("slow");
	});

	$('.main_btn:eq(0)').on('click', function(){
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