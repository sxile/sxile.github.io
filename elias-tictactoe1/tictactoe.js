let currentPlayer = "X";
let gameStatus = ""; //"" = continue, "Tie", "X wins", "O wins"
let turns = 0;

// take player turn
function playerTakeTurn(e){

	if(e.innerHTML==""){
		e.innerHTML = currentPlayer;
		checkGameStatus();
	}
	else{
		showLightBox("Already selected.","Try again.");
		return;
	}

	//game is over
	if(gameStatus !== ""){
		showLightBox(gameStatus,"Game over.")
		console.log("Game is over, " + gameStatus)
	}
}//playerTakeTurn

//after each turn, check for a winner, a tie, or continue
function checkGameStatus(){
	turns++; // count turns

	//check for win
	if (checkWin()){
		gameStatus = currentPlayer + " wins.";
		console.log("Game Status: " + gameStatus);
		return; //already figured this out before looking at the post woo
	}

	//check tie
	if(turns==9){
		gameStatus = "Tie.";
		console.log("Game Status: " + gameStatus);
	} // turns

	// swap current player
	currentPlayer = (currentPlayer == "X" ? "O" : "X");

} //checkgamestatus

// check for win
function checkWin(){
	let cb = []; //current board
	cb[0] = ""; // empty for convenience
	cb[1] = document.getElementById("one").innerHTML;
	cb[2] = document.getElementById("two").innerHTML;
	cb[3] = document.getElementById("three").innerHTML;
	cb[4] = document.getElementById("four").innerHTML;
	cb[5] = document.getElementById("five").innerHTML;
	cb[6] = document.getElementById("six").innerHTML;
	cb[7] = document.getElementById("seven").innerHTML;
	cb[8] = document.getElementById("eight").innerHTML;
	cb[9] = document.getElementById("nine").innerHTML;

	//top row
	if(cb[1] !== "" && cb[1] == cb[2] && cb[1] == cb[3]){
		return true;
	}
	if(cb[4] !== "" && cb[4] == cb[5] && cb[4] == cb[6]){
		return true;
	}
	if(cb[7] !== "" && cb[7] == cb[8] && cb[7] == cb[9]){
		return true;
	}
	if(cb[1] !== "" && cb[1] == cb[4] && cb[1] == cb[7]){
		return true;
	}
	if(cb[2] !== "" && cb[2] == cb[5] && cb[2] == cb[8]){
		return true;
	}
	if(cb[3] !== "" && cb[3] == cb[6] && cb[3] == cb[9]){
		return true;
	}
	if(cb[1] !== "" && cb[1] == cb[5] && cb[1] == cb[9]){
		return true;
	}
	if(cb[3] !== "" && cb[3] == cb[5] && cb[3] == cb[7]){
		return true;
	}
}//checkwin

// change the Visibilty of ID
function changeVisibility(divID){
	var element = document.getElementById(divID);

	//if the element exists, it is considered true
	if(element){
		element.className = (element.className == 'hidden') ? 'unhidden' : 'hidden';
	}//if
}//changevis

//display message in lightbox
function showLightBox(message, message2){
	//set messages
	document.getElementById("message").innerHTML = message;
	document.getElementById("message2").innerHTML = message2;
	//show lightbox
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");
}
function continueGame(){
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");

	//if the game is over show controls
}