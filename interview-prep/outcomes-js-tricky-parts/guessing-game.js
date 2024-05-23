function guessingGame() {
    const answer = Math.floor(Math.random() * 100);
    let guesses = 0;
    let hasWon = false;

    return function(guess) {
        if (hasWon) {
            return "The game is over, you already won!";
        }
        
        guesses++;
        if (guess < answer) {
            return `${guess} is too low!`;
        } else if (guess > answer) {
            return `${guess} is too high!`;
        } else {
            hasWon = true;
            return `You win! You found ${guess} in ${guesses} guesses.`;
        }
    };
}

module.exports = { guessingGame };