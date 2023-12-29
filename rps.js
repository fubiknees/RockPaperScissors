let playerScore = 0; 
let computerScore= 0; 
let tieScore= 0; 

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resultDiv = document.querySelector('.result')
 


// function game ( ) { 

function getComputerChoice ( ) {    
  const options = ['ROCK', 'PAPER', 'SCISSORS'] ; 
  return options[Math.floor(Math.random( )* options.length)];   
  }    

function playRound (playerSelection,  computerSelection) {   
    console.log('1', playerSelection, '2', computerSelection)
     if ( playerSelection === computerSelection) {   

            const p = document.createElement('p')
            p.innerText = "TIE GAME! AI predicted your choice of " + playerSelection + " ." + "Play Again!"
            tieScore+= 1; 
            resultDiv.appendChild(p);
            

    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {    

            const p = document.createElement('p')
            p.innerText = "You lose! Paper beats Rock."
             computerScore+= 1; 
             resultDiv.appendChild(p);

    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {   
            
            const p = document.createElement('p')
            p.innerText = "You Win! Rock beats Scissors. Bing Bang Boom";   
            playerScore+= 1; 
            resultDiv.appendChild(p);

    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {    

            const p = document.createElement('p')
            p.innerText = "You Win! Paper beats Rock. Night Night Geodude";   
             playerScore+= 1; 
             resultDiv.appendChild(p);

    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {   
            const p = document.createElement('p')
            p.innerText = "You Lose! Scissors beats Paper.";   
            computerScore+= 1; 
            resultDiv.appendChild(p);

    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {   

            const p = document.createElement('p')
            p.innerText = "You Lose! Rock beats Scissors. Better luck next time";  
            computerScore+= 1; 
            resultDiv.appendChild(p);

    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {   

            const p = document.createElement('p')
            p.innerText = "You Win! Scissors beats Paper.";  
            playerScore+= 1; 
            resultDiv.appendChild(p);

      }   
 }   

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice ( );  
    const playerSelection = 'ROCK'
    playRound(playerSelection, computerSelection);
})

paperButton.addEventListener('click', () => {
    const playerSelection = 'PAPER'
    const computerSelection = getComputerChoice ( ); 
    playRound(playerSelection, computerSelection);
})

scissorsButton.addEventListener('click', () => {
    const playerSelection = 'SCISSORS'
    const computerSelection = getComputerChoice ( ); 
    playRound(playerSelection, computerSelection);
})


 


// game ( ); 

// game ( ); 

// game ( ); 

// game ( ); 

 

 
alert( "Final Scores – Player: " + playerScore + " " + "AI: " + computerScore + " " + "Tie: " + tieScore + " "); 

 

 