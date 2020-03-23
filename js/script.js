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
				
			}else if($counter == 22){

				$('.fourth-sec').fadeOut().promise().done(function(){
					$('.five-sec').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 23){

				$('#div-1').removeClass('div-1');
				$('#div-1').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 24){

				$('#div-2').removeClass('div-2');
				$('#div-2').addClass('animated fadeInRight');
				$counter++;
				
			}else if($counter == 25){

				$('#div-3').removeClass('div-3');
				$('#div-3').addClass('animated fadeInDown');
				$counter++;
				
			}else if($counter == 26){

				$('#div-4').removeClass('div-4');
				$('#div-4').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 27){

				$('#div-5').removeClass('div-5');
				$('#div-5').addClass('animated fadeInDown');
				$counter++;
				
			}else if($counter == 28){

				$('#div-6').removeClass('div-6');
				$('#div-6').addClass('animated fadeInDown');
				$counter++;
				
			}else if($counter == 29){

				$('#div-7').removeClass('div-7');
				$('#div-7').addClass('animated fadeInRight');
				$counter++;
				
			}else if($counter == 30){

				$('.five-sec').fadeOut().promise().done(function(){
					$('.sixth-sec').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 31){

				$('#div2-1').removeClass('div2-1');
				$('#div2-1').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 32){

				$('#div2-2').removeClass('div2-2');
				$('#div2-2').addClass('animated fadeInRight');
				$counter++;
				
			}else if($counter == 33){
				$('#div2-1').addClass('animated fadeOutRight').promise().done(function(){
					$('#div2-3').removeClass('div2-3');
					$('#div2-3').addClass('animated fadeInLeft');
				});
				$counter++;
				
			}else if($counter == 34){
				$('#div2-2').addClass('animated fadeOutLeft').promise().done(function(){
					$('#div2-4').removeClass('div2-4');
					$('#div2-4').addClass('animated fadeInRight');
				});
				$counter++;
				
			}



		});

});