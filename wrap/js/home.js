$(function(){
	var totalWraps = 0; 
	var _wrapW = 0; 
	var _w = window.innerWidth;
	var _remainder;
	var cards = []; 
	var _big; 
	var _start;
	var _r;
	var _first;
	var _share = 2; 
	var _div; 
	var _size; 
	var _int; 

	function setMobile(){
		if(detectmob()){
			_div = 1.8; 
			_first = 1; 	
			_big = _w/1.5;
			_size = 2; 
			_int = 1.8;
		}else{
			_div = 4; 
			_first = 2; 
			_big = _w/3.5; 
			_size = 25;
			_int = 1.5;
		}
	}

	function setCardArray(){
		$('.card').each(function(i){
			cards.push($(this));

			totalWraps++;
		});

		setWrapWidth();
	}

	function setWrapWidth(){
		console.log('s');
		setMobile();

		_r = _big - parseInt(_w/_div); 
		_wrapW = _w/_div;
		_start = parseInt(-1*parseInt(_wrapW/2) - _r); 

		$('.card').css({width : _wrapW}); 

		cards[_share].css({width : _big, marginTop : -1*_r/_int});

		$('.absoluteContainer').css({width : parseInt(totalWraps*_wrapW) + _w/_size, marginLeft : _start});
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
				if(_first != 2){
					_containerMargin = _containerMargin + _wrapW;
					_newCenter = _first - 1;				 
					
				}else{
					_end = true;
				}	
			}else{
				 if(_first != totalWraps - 3){
				 	_containerMargin = _containerMargin - _wrapW;
				 	_newCenter = _first + 1;

				 }else{
				 	_end = true;
				 }	
				
			}

			if(!_end){
				cards[_first].stop().animate({marginTop: 0, width : _w/_div}, 300, function(){
					cards[_newCenter].stop().animate({width : _big, marginTop : -1*_r/_int}, 300);
					$('.absoluteContainer').stop().animate({marginLeft : _containerMargin});
					_first = _newCenter
				});

				
			}
		}); 
	}

	function whatWrapIsAboutShare(){
		var _newShare;
		var _w = $('.shareAssets img').width();
		var _neg;  
		var _pos; 
		var shareImages = []; 

		$('.shareAssets img').each(function(i){
			shareImages.push($(this)); 
		});

		$('.arrows').click(function(){
			if($(this).attr('id') === 'leftArr'){
				(_share == 0) ? _newShare = 4 : _newShare = _share - 1; 
				_pos = 1; 
				_neg = -1; 
			}else{
				(_share == 4) ? _newShare = 0 : _newShare = _share + 1; 
				_pos = -1; 
				_neg = 1; 
			}

			shareImages[_newShare].show().css({marginLeft : _neg*_w}).animate({marginLeft : 0});
			shareImages[_share].animate({marginLeft : _pos*_w}, function(){
					shareImages[_share].hide(); 

					_share = _newShare; 
			});; 	
			
		});
	 
	}

	function detectmob() { 
	 if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
	    return true;
	  }else{
	    return false;
	  }
	}

	$(window).resize(function() {
		_w = window.innerWidth
		setWrapWidth();
	});


 	setCardArray(); 
	createWraps(totalWraps, _wrapW); 
	whatWrapIsAboutShare(); 
}); 