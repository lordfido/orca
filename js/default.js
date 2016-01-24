var whale;
var fly;

/* Detect new mouse position, and move the whale there */
var moveWhale = function(event){

	/* If there is a mouse */
	if(event.clientX){
		var mouseX = event.clientX + window.scrollX;
		var mouseY = event.clientY + window.scrollY;
	}

	/* If there is a finger touch */
	else if(event.touches && event.touches[0]){
		var mouseX = event.touches[0].clientX + window.scrollX;
		var mouseY = event.touches[0].clientY + window.scrollY;
	}

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
		/*
		elem.style.transform = "translateX("+ coords.x +") translateY("+ coords.y +")";
		*/
		elem.style.left = coords.x;
		elem.style.top = coords.y;
	}, timeout);
};

/* Move the red dot */
var moveFly = function(event){
	var mouseX = event.clientX + window.scrollX;
	var mouseY = event.clientY + window.scrollY;
	/*
	fly.style.transform = "translateX("+ mouseX - 3 +") translateY("+ mouseY - 3 +")";
	*/
	fly.style.left = mouseX - 3;
	fly.style.top = mouseY - 3;

}

/* Debug options */
var debug = function(){

	/* If debug mode is activated */
	if( /debug=true/.test(location.search) ){

		/* For each whale piece */
		for(var x in whale){
			var temp = whale[x] ? whale[x] : false;

			if(temp && temp.classList && temp.classList.add){

				/* Add debug classes */
				if( /wireframes=true/.test(location.search) ){
					temp.classList.add("wireframes");
				}
				else if( /background=true/.test(location.search) ){
					temp.classList.add("background");
				}

				if( /transparent=true/.test(location.search) ){
					temp.classList.add("transparent");
				}
			}
		}

		if( /no-water=true/.test(location.search) ){
			document.getElementsByClassName("background")[0].style.background = "transparent";
			document.getElementsByClassName("background-colorfix")[0].style.background = "transparent";
			document.getElementsByClassName("water-overlay")[0].style.background = "transparent";
		}
	}
}

/* Event listener for mouse move */
window.addEventListener("mousemove", function(event){
	moveFly(event);

	setTimeout(function(){
		moveWhale(event);
	}, 300);
});

/* Event listener for touch move */
window.addEventListener("touchmove", function(event){
	moveFly(event);

	setTimeout(function(){
		moveWhale(event);
	}, 300);
});

/* Event listener for load completed */
window.addEventListener('load', function(event){

	console.log(event);

	/* Init variables */
	whale = document.getElementsByClassName("whale");
	fly = document.getElementsByClassName("fly")[0];

	/* Run debug tasks */
	debug();

	/* Get screen's center center coords */
	var firstMove = {
		clientX: (window.innerWidth / 2),
		clientY: (window.innerHeight / 2)
	};

	/* Set the Fly and the Whale */
	moveFly(firstMove);
	moveWhale(firstMove);
});
