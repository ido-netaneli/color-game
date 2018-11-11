
var numsquares = 6;
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#colordisplay")
var messageDisplay = document.getElementById('message')
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var hardbtn = document.querySelector("#hardbtn");
var easybtn = document.querySelector("#easybtn");
var modebtn = document.querySelectorAll(".mode");


init();

function init(){
	// mode buttons event listener
	setmodebtn();
	setsquares();
	reset();
};

function setsquares(){
	for (var i = 0; i < squares.length; i++) {
		// add click listeners to square
		squares[i].addEventListener("click", function(){
		// grab color of clicked square
			var clickedcolor = this.style.backgroundColor
		// compare to pickedcolor
			if (clickedcolor === pickedcolor) {
			messageDisplay.textContent = "Corrrect"
			changecolor(clickedcolor);
			h1.style.backgroundColor = clickedcolor;
			resetbutton.textContent = "Play again?";

		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
			}
		})
	};
}

function setmodebtn() {
	for (var i = 0; i < modebtn.length; i++) {
		modebtn[i].addEventListener("click", function(){
			modebtn[0].classList.remove("selected")
			modebtn[1].classList.remove("selected")
			this.classList.add("selected");
			// ternaryOperator
			this.textContent ==="Easy" ? numsquares = 3: numsquares = 6;
			reset();
		});
	}
}

function reset(){
	colors = generateRandomColors(numsquares);
	// pick new random color from array
	pickedcolor = pickColor();
	// change color display to match picked color
	colordisplay.textContent = pickedcolor;
	resetbutton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none"
		}
		
	}
	h1.style.backgroundColor = "steelblue"
}

resetbutton.addEventListener("click", function(){
	reset();
});




function changecolor(color){
	// loop through all squres
	for (var i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	// repeat num times
	}
	// return that array
	return arr;
}
function randomColor(){
	// pick a red from 0- 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0- 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0- 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";
}


// hardbtn.addEventListener("click", function(){
// 	hardbtn.classList.add("selected");
// 	easybtn.classList.remove("selected");
// 	colors = generateRandomColors(6);
// 	pickedcolor = pickColor();
// 	colordisplay.textContent = pickedcolor
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block"
// 	}
// });

// easybtn.addEventListener("click", function(){
// 	numsquares = 3;
// 	easybtn.classList.add("selected");
// 	hardbtn.classList.remove("selected");
// 	colors = generateRandomColors(numsquares);
// 	pickedcolor = pickColor();
// 	colordisplay.textContent = pickedcolor
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none"
// 		}
// 	}
// });


























