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
				
			}



		});

});