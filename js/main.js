$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ($(window).scrollTop() > altura) {
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	})
	console.log(altura);
});

var $menu = $('.menu'),
	$button = $('#bt_menu');

	function mostrarMenu(){
		$menu.slideToggle();
		//return false;
	}

$button.click( mostrarMenu );

/*
$(document).ready(main);

function main(){
	$('#bt_menu').click(function(){
		$('nav').toggle();
		
	});
}
*/


