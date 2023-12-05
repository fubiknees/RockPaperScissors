let playerScore = 0; 
let computerScore= 0; 
let tieScore= 0; 

 

function game ( ) { 

function getComputerChoice ( ) {    

  const options = ['ROCK', 'PAPER', 'SCISSORS'] ; 

  return options[Math.floor(Math.random( )* options.length)];   

  }    

   

function playRound (playerSelection,  computerSelection) {   

     if ( playerSelection === computerSelection) {   

             alert("TIE GAME! AI predicted your choice of " + playerSelection + " ." + "Play Again! ") ; 

             tieScore+= 1; 

         } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {    

             alert("You lose! Paper beats Rock. ");   

             computerScore+= 1; 

         } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {   

            alert("You Win! Rock beats Scissors. Bing Bang Boom");   

            playerScore+= 1; 

        } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {    

             alert("You Win! Paper beats Rock. Night Night Geodude");   

             playerScore+= 1; 

         } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {   

            alert ("You Lose! Scissors beats Paper.");   

             computerScore+= 1; 

        } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {   

             alert("You Lose! Rock beats Scissors. Better luck next time");  

             computerScore+= 1; 

       } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {   

             alert ("You Win! Scissors beats Paper.");  

                playerScore+= 1; 

      }   

}  

const playerSelection = prompt ('Choose your weapon! Write in your answer - Rock, Paper or Scissors.' ).toUpperCase( );  

const computerSelection = getComputerChoice ( );  

console.log(playRound(playerSelection, computerSelection));   

} 

game ( ); 

game ( ); 

game ( ); 

game ( ); 

game ( ); 

 

 
alert( "Final Scores – Player: " + playerScore + " " + "AI: " + computerScore + " " + "Tie: " + tieScore + " "); 

 

 