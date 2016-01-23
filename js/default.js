var whale;

/* Detect new mouse position, and move the whale there */
var moveWhale = function(event){

	var mouseX = event.clientX + window.scrollX;
	var mouseY = event.clientY + window.scrollY;

	for(var i = 0; i < whale.length; i++){
		var elem = whale[i];
		var coords = {
			x: (mouseX - (elem.offsetWidth/2)),
			y: (mouseY - (elem.offsetHeight/2))
		};
		var timeout = i * 10;

		movePiece(elem, coords, timeout);
	}
};

/* Move each whale's piece to indicated position */
var movePiece = function(elem, coords, timeout){
	setTimeout(function(){

		elem.style.left = coords.x;
		elem.style.top = coords.y;
	}, timeout);
};

/* Event listener for mouse move */
window.addEventListener("mousemove", function(event){
	moveWhale(event);
});

/* Event listener for load completed */
window.addEventListener('load', function(){

	/* Init variables */
	whale = document.getElementsByClassName("whale");

	/* Starts the magic */
	var firstMove = {
		clientX: window.innerWith/2,
		clientY: window.innerHeight/2
	};
	moveWhale(firstMove);
});
