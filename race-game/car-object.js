function Cars(top, jsnode) {
	this.start = 10;
	this.score = 0;
	this.win = true;
	this.jsnode = jsnode;
	this.jsnode.css("top",top);
}
Cars.prototype.move = function() {
	if(this.start<900) {
		this.start += 10;
		this.jsnode.css("left",this.start);
	}else {
		this.start = 900;
		this.jsnode.css("left",this.start);
	}
}