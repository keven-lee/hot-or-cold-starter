$(document).ready(hotOrCold);
'use strict';

var secretNumber = parseInt(Math.floor(Math.random() * 100) + 1),
    pastGuesses = [],
    count = 0;

function hotOrCold() {

    $(".what").click(whatClickEvent);
    $("a.close").click(closeClickEvent);
    $('#guessButton').click(guessClickEvent);
    $('a.new').click(reset);
    

}

function whatClickEvent() {
    $(".overlay").fadeIn(1000);
}

function closeClickEvent() {
    $(".overlay").fadeOut(1000);
}

function guessClickEvent() {

    var guess = $('#userGuess').val();

    if (isNaN(guess) || guess == 0 || guess > 100) {

        alert('Please choose a number between 1 and 100');
        $('#userGuess').val('');
        return false;

    } else if (pastGuesses.indexOf(guess) >= 0) {

        alert('You guessed this number already');
        $('#userGuess').val('');
        return false;

    } else {

        checkGuess(guess);
        $('#userGuess').val('');
        return false;
    }

}

function feedback(feedback) {
    $('#feedback').text(feedback);
}

function checkGuess(guess) {
    var difference = parseInt(Math.abs(secretNumber - guess));
    count++;
    $('#count').text(count);
    pastGuesses.push(guess);
    $('#guessList').append('<li>' + guess + '</li>');

    if (secretNumber == guess) {
        feedback('You Won. Click new game to play again');
    } else if (difference < 10) {
        feedback('hot');
    } else if (difference < 20 && difference > 9) {
        feedback(' Kinda hot');
    } else if (difference < 30 && difference > 19) {
        feedback('less than warm');
    } else {
        feedback('cold');
    }
}

function reset(){
    $('#count').text(count = 0);
    pastGuesses = [];
    feedback('Make your Guess!');
    $('#guessList').text('')
    secretNumber = parseInt(Math.floor(Math.random() * 100) + 1)
}