$(function() {
	var $cuadrado1 = $('.js-cuadrado1');
	var $cuadrado2 = $('.js-cuadrado2');
	function Cuadrado(lado, color, ubicacion) {
		this.lados = 0;
		this.color = color;
		this.ubicacion = ubicacion;
		this.position = 0;
		ubicacion.css({
			"height": lado,
			"width": lado,
			"border-color": color,
		});
	}
	Cuadrado.prototype.mover = function () {
		this.position += 10;
		this.ubicacion.css("left", this.position);

	}
	Cuadrado.prototype.agrandar = function (x) {
		this.lados += x;
		this.ubicacion.css({
	      "height": this.lados,
	      "width": this.lados
	    });
	}

	var cuadrado1 = new Cuadrado('200px', "orange", $cuadrado1);
	var cuadrado2 = new Cuadrado('90px', "purple", $cuadrado2);

	$('.js-mover').click(function(){
		cuadrado1.mover();
	});
	$('.js-mover2').click(function(){
		cuadrado2.mover();
	});
	$('.js-agrandar').click(function(){
		cuadrado1.agrandar(100);
	});
});