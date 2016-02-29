$(function(){
	var totalWraps = 0; 
	var _wrapW = 0; 
	var _w = window.innerWidth;
	var _remainder;
	var _center = 2; 
	var cards = []; 
	var _big = _w/3.5; 
	var _r = _big - parseInt(_w/4); 
	var _start;

	function setWrapWidth(){
		$('.card').css({width : _w/4}); 
		_wrapW = $('.card').innerWidth();
		_start = parseInt(-1*parseInt(_wrapW/2) - _r); 

		$('.card').each(function(i){
			cards.push($(this));

			if(i === 2){
				$(this).animate({width : _big, marginTop : -1*_r/1.5})
			}

			totalWraps++;
		});

		$('.absoluteContainer').css({width : parseInt(totalWraps*_wrapW) + _w/25, marginLeft : _start});

		console.log(parseInt(-1*parseInt(_w/2)));
	}

	function createWraps(_total, wrapW){
		var _containerMargin = _start;  
		_remainder = parseInt(-1*parseInt(totalWraps*_wrapW - _w) + _wrapW ); 

		$('.caroselContainer').hover(
			function(){
				$('.carArrows').animate({opacity : 1}, 300); 
			},function(){
				$('.carArrows').animate({opacity : 0}, 300); 
			}
		);

		$('.carArrows').click(function(e){
			var _num; 
			var _end = false; 
			var _newCenter; 

			

			if($(this).attr('id') == "left"){
				if(_center != 2){
					_containerMargin = _containerMargin + _wrapW;
					_newCenter = _center - 1;				 
					
				}else{
					_end = true;
				}	
			}else{
				 if(_center != totalWraps - 3){
				 	_containerMargin = _containerMargin - _wrapW;
				 	_newCenter = _center + 1;

				 }else{
				 	_end = true;
				 }	
				
			}

			if(!_end){
				cards[_center].stop().animate({marginTop: 0, width : _w/4}, 300, function(){
					cards[_newCenter].stop().animate({width : _big, marginTop : -1*_r/1.5}, 300);
					$('.absoluteContainer').stop().animate({marginLeft : _containerMargin});
					_center = _newCenter
				});

				
			}
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