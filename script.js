// Global variable for scores
let humanScore = 0;
let computerScore = 0;

// Function to get computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get human choice
function getHumanChoice() {
  let choice = prompt("Please choose: rock, paper, scissors").toLowerCase();
  // Validate user input
  while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    choice = prompt("Invalid choice. Please choose: rock, paper, or scissors").toLowerCase();
  }
  return choice;
}

// Function to play a round
function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
             (humanChoice === 'paper' && computerChoice === 'rock') || 
             (humanChoice === 'scissors' && computerChoice === 'paper')) {
    console.log("You win this round!");
    humanScore++;
  } else {
    console.log("Computer wins this round!");
    computerScore++;
  }

  // Display current score
  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

// Function to play game
function playGame(round) {
  if (round <= 5) {
    console.log(`Round ${round}:`);
    playRound();
    // Play next round recursively
    playGame(round + 1);
  } else {
    // Game over
    console.log("Game Over!");
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("It's a tie!");
    }
  }
}

// Start game
playGame(1);
