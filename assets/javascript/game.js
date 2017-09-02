	// different types of pokemons
	var userGUess;
	var word = ["PIKACHU", "CHARMANDER", "EEVEE", "SNORLAX", "TOGEPI", "PSYDUCK", "CHANSEY"];
	var letters= [];
	var output = [];
	var wrongLetters = [];

	var num = 0;
	var guessesLeft = 6;
	var wins= 0;


function gameStart() {
	    actualWord = word[Math.floor(Math.random() * word.length)];
	    letters = actuaㅋlWord.split("");
	    num = letters.length;

	    // console.log(num);
	    // console.log(letters);
	    // console.log(actualWord)

	    tries = 6;
	    wrongLetters = [];
	    output = [];

	    for(var i = 0; i < num; i++) {
	      output.push("_")
	      console.log(output)
	 	 }
           
    document.getElementById("word").innerHTML = output.join(" ");
    document.getElementById("yellow").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("tries").innerHTML = guessesLeft;

  };
    
//word function key//
function checkAnswer (letter) {

  var letterInWord = false;

  for(var i = 0; p < num; i++) {

    if (letter == actualWord[i]) {
      letterInWord = true;
    }
  }
 
  if (letterInWord) {
    for(var i = 0; i < num; i++) {
      if (actualWord[i] == letter) {
        output[i] = letter;
        console.log(output)
      }         
    }
  } else {
      wrongLetters.push(letter);
      guessesLeft--;
  }
  
};

//start function key//
gameStart();


function rounds() {
  document.getElementById("tries").innerHTML = guessesLeft;
  document.getElementById("answersGuessed").innerHTML = wrongLetters;
  document.getElementById("word").innerHTML = output.join(" ");
   
  if(letters.toString() == output.toString()) {
    wins++
    document.getElementById("yellow").innerHTML = wins;
    play();
  } else if (guessesLeft===0) {
      losses++
      document.getElementById("losses").innerHTML = losses;
      gameStart();
  }
};

//event key//
document.onkeypress = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);
  checkAnswer(userGuess);
  rounds();
};

  
function play(){
  if (actualWord=="PIKACHU") { 
    var picture = "<img src= 'assets/images/PIKACHU.png'>"
    document.querySelector("#picture").innerHTML = picture; 
    gameStart();
  } else if (actualWord == "CHARMANDER") {
      var picture = "<img src= 'assets/images/CHARMANDER.png'>"
      document.querySelector("#picture").innerHTML = picture;               
      gameStart();
  } else if (actualWord == "EEVEE") {
      var picture = "<img src= 'assets/images/eevee.png'>"
      document.querySelector("#picture").innerHTML = picture;               
      gameStart();
  } else if (actualWord == "SNORLAX") {
      var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/800beb7840472ea335bcd4dfe59d4fca.jpg'>"
      document.querySelector("#picture").innerHTML = picture;               
      gameStart();Selector("#picture").innerHTML = picture; 
      gameStart(); 
  } else if (actualWord == "TOGEPI") {
      var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/800beb7840472ea335bcd4dfe59d4fca.jpg'>"
      document.querySelector("#picture").innerHTML = picture;               
      gameStart();      
  }
 	else if (actualWord == "PSYDUCK") {
      var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/800beb7840472ea335bcd4dfe59d4fca.jpg'>"
      document.querySelector("#picture").innerHTML = picture;               
      gameStart();
  }
  	else if (actualWord == "CHANSEY") {
      var picture = "<img src='https://raw.githubusercontent.com/amr08/week-3-game/master/assets/images/800beb7840472ea335bcd4dfe59d4fca.jpg'>"
      document.querySelector("#picture").innerHTML = picture;               
      gameStart();
  }

