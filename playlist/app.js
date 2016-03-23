var playlist = new Playlist();


var unaCancion = new Song("Una cancion", "Los de Adentro", "3:12");
var allTheSmallThings = new Song("All the small things", "Blink-182", "2:55");


playlist.add(unaCancion);

playlist.add(allTheSmallThings);

console.log(playlist);



var playlistElement = document.getElementById('playlist');
playlist.renderInElement(playlistElement);


var playbutton = document.getElementById('play');
playbutton.onclick = function() {
	playlist.play();
	playlist.renderInElement(playlistElement);
}

var nextbutton = document.getElementById('next');
nextbutton.onclick = function() {
	playlist.next();
	playlist.renderInElement(playlistElement);
}

var stopbutton = document.getElementById('stop');
stopbutton.onclick = function() {
	playlist.stop();
	playlist.renderInElement(playlistElement);
}

