$(function(){
	var _hamClicked = false; 

	$('.hamburger').click(function(){		
		(_hamClicked) ? $('.leftNav, .x').hide() : $('.leftNav, .x').show();	
		(_hamClicked) ? _hamClicked = false : _hamClicked = true; 
	});

	$('.modalButton, .close').click(function(){
		var _this = $(this).attr('id');

		$('.modalContainers').each(function(){
			($(this).attr('id') === _this) ? $(this).show() : $(this).hide(); 

			console.log(_this, $(this).attr('id'));
		});

		$('.modal').show(); 

	}); 


	$('.close').click(function(){
		$('.modal').hide(); 
	});
}); 