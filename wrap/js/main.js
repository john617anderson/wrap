$(function(){
	var _hamClicked = false; 

	$('.hamburger').click(function(){	
		if(_hamClicked){
			$('.leftNav, .x').hide();
			$('.burger').show(); 
			_hamClicked = false;
		}else{
			 $('.leftNav, .x').show();
			 $('.burger').hide(); 
			 _hamClicked = true; 	
		}

	});

	$('.modalButton, .close').click(function(){
		var _this = $(this).attr('id');

		if($(this).attr('class') === "modalButton bios"){
			var _img = $(this).find('img').attr('src'); 
			var _name = $(this).find('h4').text(); 
			var _title = $(this).find('h5').text(); 


			_this = $(this).find('h4').text().toLowerCase();  

			for(var i = 0; i < bios.length; i++){
				var _b = bios[i]; 

				if(_b.name.toLowerCase() === _this){
					$('.headerBioImage').empty().html('<img src="' + _img + '" />'); 		
					$('.bio').find('h2').empty().html(_name.toString());
					$('.bio').find('h3').empty().html(_title.toString());
					$('.bio').find('p').empty().html(_b.bio.toString());

					console.log(_b.bio.toString());
				}
			}

			$('#bioContainer').show(); 

		}else{
			$('.modalContainers').each(function(){
				($(this).attr('id') === _this) ? $(this).show() : $(this).hide(); 

				console.log(_this, $(this).attr('id'));
			});
		}
		$('.modal').show(); 
	});


	$('.close').click(function(){
		$('.modal').hide(); 
	});
}); 