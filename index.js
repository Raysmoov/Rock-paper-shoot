let choices = [    'rock',    'paper',    'scissors'];

let userScore = 0;
let computerScore = 0;

function playRound() {
  let userChoice = prompt('Choose between rock - paper - scissors');
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  alert('Computer selects ' + computerChoice);

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      alert('You lose!');
      computerScore++;
    } else if (computerChoice === 'scissors') {
      alert('You win!');
      userScore++;
    } else {
      alert("It's a draw!");
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      alert('You lose!');
      computerScore++;
    } else if (computerChoice === 'rock') {
      alert('You win!');
      userScore++;
    } else {
      alert("It's a draw!");
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      alert('You lose!');
      computerScore++;
    } else if (computerChoice === 'paper') {
      alert('You win!');
      userScore++;
    } else {
      alert("It's a draw!");
    }
  } else {
    alert('Invalid choice! Please choose rock, paper, or scissors.');
    playRound();
  }

  alert(`Score: You ${userScore} - ${computerScore} Computer`);
}

// Play 7 rounds
for (let i = 0; i < 7; i++) {
  playRound();
}

// Declare the winner
if (userScore > computerScore) {
  alert('Congratulations! You win the game!');
} else if (userScore < computerScore) {
  alert('Sorry, you lost the game.');
} else {
  alert("It's a tie game!");
}