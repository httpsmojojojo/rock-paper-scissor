// Global variable for scores
let humanScore = 0;
let computerScore = 0;

// Function to get computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a round
function playRound(playerSelection) {
  const computerChoice = getComputerChoice();

  const resultDiv = document.getElementById('result');
  const scoreDiv = document.getElementById('score');

  resultDiv.innerHTML = `You chose: <strong>${playerSelection}</strong>. Computer chose: <strong>${computerChoice}</strong>.`;

  if (playerSelection === computerChoice) {
    resultDiv.innerHTML += "<br>It's a tie!";
  } else if ((playerSelection === 'rock' && computerChoice === 'scissors') || 
             (playerSelection === 'paper' && computerChoice === 'rock') || 
             (playerSelection === 'scissors' && computerChoice === 'paper')) {
    resultDiv.innerHTML += "<br>You win this round!";
    humanScore++;
  } else {
    resultDiv.innerHTML += "<br>Computer wins this round!";
    computerScore++;
  }

  // Display current score
  scoreDiv.innerHTML = `Score - You: ${humanScore}, Computer: ${computerScore}`;

  // Check if someone has won the game
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      scoreDiv.innerHTML += "<br>Congratulations! You win the game!";
    } else {
      scoreDiv.innerHTML += "<br>Computer wins the game!";
    }
    // Disable buttons after game over
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
  }
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
