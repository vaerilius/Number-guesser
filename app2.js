/*
Game fuction:
 -Player must guess a number between a min and max
 -Player gets a certain amount of guesses
 -Notify player of quesses remaining
 -Notify the player of the corret answer if loose
 -let player choose to play again
 */

// Game variables
let min = 1,
  max = 10,
  winningNum = RandomWinningNumberBetween1And10(min, max),
  guessesLeft = 3;


const message = document.querySelector('.message'),
  game = document.querySelector('#game'),
  guessInput = document.querySelector('#guess-input');



game.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  console.log(guess + " " + winningNum);
  if (guess < 1 || guess >10 || guess === NaN) {
    sendMessage('Pleace put value between 1-10' , 'blue');
    setTimeout(function(){ window.location.reload() },3000);
  } else {
    if (winningNum === guess) {
   
      sendMessage('YOU WIN, number was ' + winningNum, 'green');
      setTimeout(function(){ window.location.reload() },3000);
     
      } else {
        sendMessage('YOU LOST, number was ' + winningNum, 'red');
        setTimeout(function(){ window.location.reload() },3000);
        
      }
    
    }
  })



// console.log(winningNum);
// document.writeln(setMessage('number was ' + winningNum, 'blue'));



function sendMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}


function RandomWinningNumberBetween1And10(min, max) {
  return Math.floor(Math.random() * (max)) + min
};