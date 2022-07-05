let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


//generate random number
const generateTarget = () => {
   return Math.floor(Math.random()*9)
}

//compare guesses between computer and human
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    let humanAV = Math.abs(humanGuess - targetNumber)
    let computerAV = Math.abs(computerGuess-targetNumber)

    if (humanAV <= computerAV) {
        return true
        //console.log('Human wins')
    } else {
        return false
        //console.log('computer wins')
    }

}

const updateScore = (winner) => {
    if (winner === "human") {
        humanScore++
    } else {
        computerScore++
    }
}

const advanceRound = () => {
    currentRoundNumber++
}