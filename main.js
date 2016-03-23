//CONSTRUCTOR FUNCTION

function dice (sides) {
	this.lados = sides
}

//sirve para crear metodos una sola vez y no crearlos cada vez q se crea una instancia
dice.prototype.roll = function () {
		var randomNumber = Math.floor(Math.random() * this.lados) + 1;
		console.log(randomNumber);
		return randomNumber;
}


var dice10 = new dice(10);

var dice4 = new dice(4);

console.log(dice10.roll());

console.log(dice4.roll() + " jorge");



//OBJECT LITERAL

// var dice = {
// 	sides : 6,
// 	roll : function(number) {
// 		var randomNumber = Math.floor(Math.random() * number) + 1;
// 		console.log(randomNumber);
// 		return randomNumber;
// 	},
// 	nombre : function(name) {
// 		console.log(name);
// 		return name + "pleno";
// 	}
// }

// var imprimir = function(number) {
// 	var displaynumber = document.getElementById("number");
// 	displaynumber.innerHTML = number;
// }



// var boton = document.getElementById("boton");

// boton.onclick = function(event) {
// 	event.preventDefault();
// 	var result = dice.roll(20);
// 	imprimir(result);
// };

