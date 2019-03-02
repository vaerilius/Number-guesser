/*
Game fuction:
 -Player must guess a number between a min and max
 -Player gets a certain amount of guesses
 -Notify player of quesses remaining
 -Notify the player of the corret answer if loose
 -let player choose to play again
 */

 // Game values
 let    min = 1,
        max = 10,
        winningNum= RandomWinningNumber(min, max),
        guessesLeft =3;

// UI element
const   game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e){
if(e.target.className === 'play-again'){
  window.location.reload();
}
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
   
    // Validate
  if(isNaN(guess) || guess < min || guess > max){
    sendMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //check if won
  if(guess === winningNum){
    //game over  - won
    gameOver(true, `${winningNum} is correct! You Win!`)

  } else{
    //wrong numner 
    guessesLeft -= 1;

    if(guessesLeft === 0){
      // game over - lost
      gameOver(false, `Game over, you lost. the corret number was ${winningNum}`);
    }else{
       

      // change border color
      guessInput.style.borderColor = 'red';

      // Clear the input
      guessInput.value = '';

      // Tell userit is the wrong number
      sendMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red' );
    }
  }
});

// Game over
function gameOver(won, msg){
let color;
//if won = true so color is green and so on..
won === true ? color = 'green' : color = 'red';
 
// Disable input
guessInput.disabled = true;
// Change border color
guessInput.style.borderColor = color;
message.style.color = color;
// set message
sendMessage(msg);

//play again
guessBtn.value = 'Play Again';
guessBtn.className += 'play-again';
}

//Get winning number
function RandomWinningNumber(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function sendMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;   
}