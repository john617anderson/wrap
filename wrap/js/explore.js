$(function(){
	$('.cardTitle').click(function(){
		var _id = $(this).attr('id');

		$('.cardTitle').each(function(){
			var _color; 
			if(_id === $(this).attr('id')){
				_color = "rgba(255, 255, 255, 1)";

				$('.wrapCovers').each(function(){
					(_id === $(this).attr('id')) ? $(this).show() : $(this).hide(); 
				});
			}else{
				_color = "rgba(63, 63, 67, .7)";
			}

			$(this).css("background", _color);
		});
	});
});