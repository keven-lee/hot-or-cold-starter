$(document).ready(function(){
  'use strict';
  var secretNumber, 
  userGuess, 
  pastGuesses = [], 
  count,
  guessHtml, 
  userFeedback,
  alreadyGuessed,
  newButton,
  form ,
  input,
  feedback,
  countElement,
  guessList;

  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

    newGame();
});

function newGame(){
  getUserGuess();
  generateNumber();
}

function generateNumber(){
  secretNumber = Math.floor(Math.random()*100)+1;
}

function getUserGuess(){
  $('#guessButton').click(function(){
    userGuess = $('#userGuess').val();
    generateFeedback();
    $('#userGuess').val('');
    return false;
  })
}

function generateFeedback(){
  if(secretNumber == userGuess){
    winner();
  } else if(Math.abs(secretNumber - userGuess) < 10){
    userFeedback = 'hot';
  } else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
    userFeedback = ' Kinda hot';
  } else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
    userFeedback = 'less than warm';
  } else {
    userFeedback = 'cold';
  }
  render();
}

function render(){
  $('#feedback').html(userFeedback);
}

function winner(){
  userFeedback = 'You Won. Click new game to play again';
  $('#guessButton').hide();
}
