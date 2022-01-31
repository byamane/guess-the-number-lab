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
  getGuess: function(){
    let userGuess = +prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`);
    // Setting userGuess to prompt user to input number between 1 and 100. The parseInt() function will point userGuess to NaN if the user inputs a guess that is not a number
    // Next, I want to incorporate a while loop that will run as many times needed while the user gives an incorrect guess that is not a number or within the upper/lower thresholds
    while(isNaN(userGuess)|| userGuess < this.smallestNum ||userGuess > this.biggestNum){
        userGuess = +prompt(`Guess must be a number between ${this.smallestNum} and ${this.biggestNum}. Please try again.`)
      }
      return userGuess;
      // Return user's guess once they have input an appropriate guess per the above while loop's conditions
  },

  play: function(){
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    
    // do while loop that compares userGuess to secretNum; Will prompt user to continually guess until secretNum has been guessed by the user meanwhile storing the incorrect guesses into our previously initialized prevGuesses array

    do{
      this.prevGuesses.push(this.getGuess());
    } while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)

    return this.secretNum
      
  }
}

game.play();
console.log(game.prevGuesses.length);
