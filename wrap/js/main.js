$(function(){
	var _hamClicked = false; 

	$('.hamburger').click(function(){		
		(_hamClicked) ? $('.leftNav, .x').hide() : $('.leftNav, .x').show();	
		(_hamClicked) ? _hamClicked = false : _hamClicked = true; 
	});
}); 