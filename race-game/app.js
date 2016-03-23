$(function(){
	// VARIABLE
	var $redcar = $('.js-car-r');
	var $bluecar = $('.js-car-b');
	var $winner= $('.js-winner');
	var $restart= $('.js-button');
	var $scoreRed= $('.js-rojo');
	var $scoreBlue= $('.js-azul');

	// NEW CARS
	var redCar = new Cars(160, $redcar);
	var blueCar = new Cars(280, $bluecar);

	// KEYBOARD EVENT
	$(document).keypress(function(e){
		//MOVE RED CAR
		if(e.which === 49 && blueCar.win && redCar.win) {
			redCar.move();
		//MOVE BLUE CAR
		}else if(e.which === 50 && blueCar.win && redCar.win) {
			blueCar.move();
		}
		// WHICH CAR IS WINNING
		if(redCar.start > blueCar.start && blueCar.win && redCar.win) {
			$winner.html("Ganando carro rojo");
		}else if (redCar.start < blueCar.start && blueCar.win && redCar.win) {
			$winner.html("Ganando carro azul");
		}else if(redCar.start === blueCar.start && blueCar.win && redCar.win){
			$winner.html("Empatados");
		}
		// THE WINNER IS
		if(blueCar.win && redCar.win && redCar.start === 900 && blueCar.start < 900) {
			$winner.html("El ganador es el carro rojo");
			redCar.score++;
			$scoreRed.html(redCar.score);
			redCar.win = false;
		}else if (blueCar.win && redCar.win && blueCar.start === 900 && redCar.start < 900) {
			$winner.html("El ganador es el carro azul");
			blueCar.score++;
			$scoreBlue.html(blueCar.score);
			blueCar.win = false;
		}
	});// END KEYBOAR EVENT

	// RESTART BUTTON
	$restart.click(function(event) {
		event.preventDefault();
		console.log("se presiono");
		$bluecar.css("left","10px");
		$redcar.css("left","10px");
		blueCar.start = 10;
		redCar.start = 10;
		blueCar.win = true;
		redCar.win = true;
	});	//END RESTART BUTTON

});	