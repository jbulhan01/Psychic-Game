

var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoices = [];

document.onkeyup = function (event) {

    var myGuess = event.key;

    var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    if (options.indexOf(myGuess) > -1) {
        if (myGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            guessChoices = [];
        }
        else {
            if (guessChoices.includes(myGuess)) {

            }
            else {
                guessesLeft--;
                guessChoices.push(myGuess);
            }
        }

        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            guessChoices = [];
        }
    }

    var html =
        "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;

}
