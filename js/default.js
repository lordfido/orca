var whale = document.getElementsByClassName("whale");

function moveWhale(event) { 
	var x = event.clientX + window.scrollX;
	var y = event.clientY + window.scrollY;
	
	var i = 0;
	var width = whale[i].clientWidth;
	var height = whale[i].clientHeight;
	whale[i].style.left = (x - (width/2)) + "px";
	whale[i].style.top = (y - (height/2)) + "px";
	i++;
	moveBody(i, event);
}

function moveBody(elem, event){
	var x = event.clientX + window.scrollX;
	var y = event.clientY + window.scrollY;
	
	var width = whale[elem].clientWidth;
	var height = whale[elem].clientHeight;
	whale[elem].style.left = (x - (width/2)) + "px";
	whale[elem].style.top = (y - (height/2)) + "px";
	
	if(elem < (whale.length - 1)){
		setTimeout(function(){
			moveBody(elem + 1, event);
		}, 50);
	}
	
}

function createWhale() {
	
	for (var i = 0; i < whale.length; i++)
	{
		//whale[i].style.transitionDelay = (i / 10) + "s";
		whale[i].style.transitionDuration = "1.5s";
	}
}