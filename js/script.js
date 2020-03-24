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

				$('.sec-sec').fadeOut();
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
					$('.lo2lo2').fadeIn();
					$('.five-sec').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 23){

				$('#div-2').removeClass('div-2');
				$('#div-2').addClass('animated fadeInRight');
				$counter++;
	
				
			}else if($counter == 24){

				$('.five-sec').fadeOut().promise().done(function(){
					$('.five-sec-2').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 25){

				$('#div-5').removeClass('div-5');
				$('#div-5').addClass('animated fadeInDown');
				$counter++;
				
			}else if($counter == 26){

				$('#div-6').removeClass('div-6');
				$('#div-6').addClass('animated fadeInDown');
				$counter++;
				
			}else if($counter == 27){

				$('.lo2lo2').fadeOut();
				$('.five-sec-2').fadeOut().promise().done(function(){
					$('.sixth-sec').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 28){

				$('#div2-1').removeClass('div2-1');
				$('#div2-1').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 29){

				$('#li1-2').removeClass('li1-2');
				$counter++;
				
			}else if($counter == 30){

				$('#li1-3').removeClass('li1-3');
				$counter++;
				
			}else if($counter == 31){

				$('#li1-4').removeClass('li1-4');
				$counter++;
				
			}else if($counter == 32){

				$('#li1-5').removeClass('li1-5');
				$counter++;
				
			}else if($counter == 33){

				$('#div2-2').removeClass('div2-2');
				$('#div2-2').addClass('animated fadeInRight');
				$counter++;
				
			}else if($counter == 34){

				$('#li2-2').removeClass('li2-2');
				$counter++;
				
			}else if($counter == 35){

				$('#li2-3').removeClass('li2-3');
				$counter++;
				
			}else if($counter == 36){

				$('#li2-4').removeClass('li2-4');
				$counter++;
				
			}else if($counter == 37){

				$('#li2-5').removeClass('li2-5');
				$counter++;
				
			}else if($counter == 38){

				$('#li2-6').removeClass('li2-6');
				$counter++;
				
			}else if($counter == 39){

				$('#li2-7').removeClass('li2-7');
				$counter++;
				
			}else if($counter == 40){
				$('#div2-3').removeClass('div2-3');
				$('#div2-3').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 41){

				$('#li3-2').removeClass('li3-2');
				$counter++;
				
			}else if($counter == 42){

				$('#li3-3').removeClass('li3-3');
				$counter++;
				
			}else if($counter == 43){

				$('#li3-4').removeClass('li3-4');
				$counter++;
				
			}else if($counter == 44){

				$('#li3-5').removeClass('li3-5');
				$counter++;
				
			}else if($counter == 45){
				$('.sixth-sec').fadeOut().promise().done(function(){
					$('.sixth-sec-2').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 46){

				$('#li4-1').removeClass('li4-1');
				$counter++;
				
			}else if($counter == 47){

				$('#li4-2').removeClass('li4-2');
				$counter++;
				
			}else if($counter == 48){

				$('#li4-3').removeClass('li4-3');
				$counter++;
				
			}else if($counter == 49){

				$('#li4-4').removeClass('li4-4');
				$counter++;
				
			}else if($counter == 50){

				$('#li4-5').removeClass('li4-5');
				$counter++;
				
			}else if($counter == 51){

				$('#li4-6').removeClass('li4-6');
				$counter++;
				
			}else if($counter == 52){

				$('#li4-7').removeClass('li4-7');
				$counter++;
				
			}else if($counter == 53){

				$('.sixth-sec-2').fadeOut().promise().done(function(){
					$('.seventh-sec').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 54){

				$('#div3-1').removeClass('div3-1');
				$('#div3-1').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 55){

				$('#li5-2').removeClass('li5-2');
				$counter++;
				
			}else if($counter == 56){

				$('#li5-3').removeClass('li5-3');
				$counter++;
				
			}else if($counter == 57){

				$('#li5-4').removeClass('li5-4');
				$counter++;
				
			}else if($counter == 58){

				$('#li5-5').removeClass('li5-5');
				$counter++;
				
			}else if($counter == 59){

				$('#li5-6').removeClass('li5-6');
				$counter++;
				
			}else if($counter == 60){

				$('#li5-7').removeClass('li5-7');
				$counter++;
				
			}else if($counter == 61){

				$('#li5-8').removeClass('li5-8');
				$counter++;
				
			}else if($counter == 62){

				$('.seventh-sec').fadeOut().promise().done(function(){
					$('.eighth-sec').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 63){

				$('#div4-1').removeClass('div4-1');
				$('#div4-1').addClass('animated fadeInLeft');
				$counter++;
				
			}else if($counter == 64){

				$('#li6-1-1').removeClass('li6-1-1');
				$counter++;
				
			}else if($counter == 65){

				$('#li6-1-2').removeClass('li6-1-2');
				$counter++;
				
			}else if($counter == 66){

				$('#li6-1-3').removeClass('li6-1-3');
				$counter++;
				
			}else if($counter == 67){

				$('#li6-1-4').removeClass('li6-1-4');
				$counter++;
				
			}else if($counter == 68){

				$('.eighth-sec').fadeOut().promise().done(function(){
					$('.eighth-sec-2').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 69){

				$('#li6-3').removeClass('li6-3');
				$counter++;
				
			}else if($counter == 70){

				$('#li6-4').removeClass('li6-4');
				$counter++;
				
			}else if($counter == 71){

				$('.eighth-sec-2').fadeOut().promise().done(function(){
					$('.eighth-sec-3').fadeIn(1000);
				});
				$counter++;
				
			}else if($counter == 72){

				$('#li6-6').removeClass('li6-6');
				$counter++;
				
			}else if($counter == 73){

				$('.header').fadeOut();
				$('.eighth-sec-3').fadeOut().promise().done(function(){
					$('.outro').fadeIn(1000);
					$('#div5-logo').removeClass('div5-logo');
					$('#div5-1').removeClass('div5-1');
					$('#div5-2').removeClass('div5-2');
					$('#div5-3').removeClass('div5-3');
					$('#div5-4').removeClass('div5-4');
					$('#div5-5').removeClass('div5-5');
				});
				$counter++;
				
			}



		});

});