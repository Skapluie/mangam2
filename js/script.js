$(document).ready(function(){

	$counter = 0;

		$(document).click(function(){
			if($counter == 0){

				$('#intro').fadeOut().promise().done(function(){

					$('.fist-sec').fadeIn(2000);

				});

				$counter++;
				
			}else if($counter == 1){

				$('.fist-sec').fadeOut().promise().done(function(){

					$('.main').fadeIn(2000);

				});

				$counter++;
				
			}else if($counter == 2){

				$('#icons').removeClass("icons-dis");
				$('#icon-4').removeClass('icon-4');
				$('#icon-4').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 3){

				$('#icon-3').removeClass('icon-3');
				$('#icon-3').addClass('animated fadeInDown');
				$counter++;
				
			}else if($counter == 4){

				$('#icon-2').removeClass('icon-2');
				$('#icon-2').addClass('animated fadeInDown');
				$counter++;
				
			}else if($counter == 5){

				$('#icon-1').removeClass('icon-1');
				$('#icon-1').addClass('animated fadeInRight');
				$counter++;
				
			}else if($counter == 6){

				$('#icon-7').removeClass('icon-7');
				$('#icon-7').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 7){

				$('#icon-6').removeClass('icon-6');
				$('#icon-6').addClass('animated fadeInDown');
				$counter++;
				
			}else if($counter == 8){

				$('#icon-5').removeClass('icon-5');
				$('#icon-5').addClass('animated fadeInRight');
				$counter++;
				
			}else if($counter == 9){

				$('#icons').fadeOut().promise().done(function(){
					$('.third-sec').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 10){

				$('#icon2-4').removeClass('icon2-4');
				$('#icon2-4').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 11){

				$('#icon2-3').removeClass('icon2-3');
				$('#icon2-3').addClass('animated fadeInDown');
				$counter++;
				
			}else if($counter == 12){

				$('#icon2-2').removeClass('icon2-2');
				$('#icon2-2').addClass('animated fadeInDown');
				$counter++;
				
			}else if($counter == 13){

				$('#icon2-1').removeClass('icon2-1');
				$('#icon2-1').addClass('animated fadeInRight');
				$counter++;
				
			}else if($counter == 14){

				$('#icon-words').removeClass('icon-words');
				$('#icon-words').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 15){

				$('#icon-words2').removeClass('icon-words2');
				$('#icon-words2').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 16){

				$('.third-sec').fadeOut().promise().done(function(){
					$('.fourth-sec').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 17){

				$('#icon3-6').removeClass('icon3-6');
				$('#icon3-6').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 18){

				$('#icon3-5').removeClass('icon3-5');
				$('#icon3-5').addClass('animated fadeInDown');
				$counter++;
				
			}else if($counter == 19){

				$('#icon3-4').removeClass('icon3-4');
				$('#icon3-4').addClass('animated fadeInRight');
				$counter++;
				
			}else if($counter == 20){

				$('#icon3-3').removeClass('icon3-3');
				$('#icon3-3').addClass('animated fadeInRight');
				$counter++;
				
			}else if($counter == 21){

				$('#icon3-2').removeClass('icon3-2');
				$('#icon3-2').addClass('animated fadeInRight');
				$counter++;
				
			}



		});

});