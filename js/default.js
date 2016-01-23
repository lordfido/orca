var whale;
var fly;

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

var moveFly = function(event){

	console.log(fly)

	var mouseX = event.clientX + window.scrollX;
	var mouseY = event.clientY + window.scrollY;

	fly.style.left = mouseX - 3;
	fly.style.top = mouseY - 3;
}

/* Event listener for mouse move */
window.addEventListener("mousemove", function(event){
	moveFly(event);

	setTimeout(function(){
		moveWhale(event);
	}, 400);
});

/* Event listener for load completed */
window.addEventListener('load', function(){

	/* Init variables */
	whale = document.getElementsByClassName("whale");
	fly = document.getElementsByClassName("fly")[0];

	/* Starts the magic */
	var firstMove = {
		clientX: window.innerWith/2,
		clientY: window.innerHeight/2
	};
	moveWhale(firstMove);
});
