let p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2");
let resetButton = document.querySelector("#reset");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.getElementById("p2Display");
let numInput = document.querySelector("input");
// let numInput = document.querySelector("input[type='number']");
// let winningScoreDisplay = document.querySelector("p span");
let message = document.querySelector('.messageDisplay');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver) {
		p1Score++;
		message.textContent = `Score to Player One: ${p1Score} to ${p2Score}`;
		p1Display.textContent = p1Score;
		// p1Display.prototype.classList.color = "var(--light)";
		if(p1Score === winningScore) {
			message.textContent = `GAME OVER! Player One wins`;
			p1Display.classList.add("winner");
			gameOver = true;
		}
	} else {
		message.textContent = `Click 'Reset' to start new game`;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++;
		message.textContent = `Score to Player One: ${p1Score} to ${p2Score}`;
		p2Display.textContent = p2Score;
		if(p2Score === winningScore) {
			message.textContent = `GAME OVER! Player Two wins`;
			p2Display.classList.add("winner");
			gameOver = true;
		}
	} else {
		message.textContent = `Click 'Reset' to start new game`;
	}
});

resetButton.addEventListener("click", function() {
	reset();
	message.textContent = `New game is on. Good luck!`;
});

numInput.addEventListener("change", function() {
	winningScore = Number(this.value);
	// winningScoreDisplay.textContent = winningScore;
	message.textContent = `Winning score now set for ${winningScore}. Game's on!`;
	reset();
});

function reset() {
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver = false;
}

// let score = document.querySelector("#score");

// p1Button.addEventListener("click", addValue)

// function addValue() {
// 	if(score > one && score > two) {
// 	document.querySelector(".one") += 1;
// 	return
// 	} else {
// 		alert("Game over. Click RESET")
// 	}
// }


// Copyright Date Script
let dates = document.querySelector('span#date');

if (new Date().getFullYear()>2018) {
    let date = new Date().getFullYear();
    dates.textContent = `-${date}`;
}

// Global site tag (gtag.js) - Google Analytics Script
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-131142493-1');