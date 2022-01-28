// Guess the Number Game Features

/** Allow the player to continually be prompted to enter their guess at the secret number until they guess correctly.
 
 * If the player has an incorrect guess, display an alert message that informs the player:
 
 * Whether their guess is too high or too low, and…
  
 * A list of all the previously guessed numbers (without showing the square brackets of an array).

 * If the player has guessed the secret number:
      * Display an alert message that congrats the player and informs them of how many guesses they took.
 
 * End the gameplay.*/

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  // getGuess: function() {
  //   this.
  // }
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      return this.secretNum
      this.prevGuesses += 1; // keeping running track of number of user's previous guesses
  }
}

// console.log(game.getGuess());
console.log(game.play());
console.log(game.prevGuesses.length);

