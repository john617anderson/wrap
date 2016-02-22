$(function(){
	var totalWraps = 0; 
	var _wrapW = 0; 
	var _w = window.innerWidth;
	var _remainder;

	function setWrapWidth(){
		$('.card').css({width : _w/4}); 
		_wrapW = $('.card').innerWidth();

		$('.card').each(function(i){
			totalWraps++;
		});

		$('.absoluteContainer').css({width : parseInt(totalWraps*_wrapW)});
	}

	function createWraps(_total, wrapW){
		var _containerMargin = 0;  
		_remainder = parseInt(-1*parseInt(totalWraps*_wrapW - _w) + _wrapW ); 

		$('.carArrows').click(function(e){
			var _num; 

			if($(this).attr('id') == "left"){
				if(_containerMargin != 0)
				_containerMargin = _containerMargin + _wrapW;
			}else{
				 if(_containerMargin > _remainder)
				_containerMargin = _containerMargin - _wrapW;
			}

			$('.absoluteContainer').stop().animate({marginLeft : _containerMargin});
		}); 
	}

	function whatWrapIsAboutShare(){
		var _share = 0; 

		$('.arrows').click(function(){
			if($(this).attr('id') === 'leftArr'){
				(_share == 0) ? _share = 4 : _share--; 
			}else{
				(_share == 4) ? _share = 0 : _share++; 
			}

			$('.shareAssets img').each(function(i){
				(i == _share) ? $(this).show() : $(this).hide();
			}); 
		});
	}

	setWrapWidth(); 
	createWraps(totalWraps, _wrapW); 
	whatWrapIsAboutShare(); 
}); 