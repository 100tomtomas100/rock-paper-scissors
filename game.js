function pleasechoose() { 
    let humanChoice = prompt("Please choose ROCK, PAPER or SCISSORS"); 
    return humanChoice.toLowerCase();
} 

function computerPlay() {
    const choices = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    let random = choices[Math.floor(Math.random() * choices.length)];
    return  random.toLowerCase();
}

let computer = computerPlay();
console.log(computer)

function outcome(call, call2) {
    if (call === call2) {
        return "NOBODY WINS TRY AGAIN!!!";
     } else if (call === "rock" && call2 === "scissors") {
         return "YOU WIN!!!ROCK BEATS SCISSORS!!!";
     } else if (call === "paper" && call2 === "rock") {
         return "YOU WIN!!!PAPER BEATS ROCK!!!"; 
     } else if (call === "scissors" && call2 === "paper") {
         return "YOU WIN!!!SCISSORS BEATS PAPER!!!"; 
     } else if (call2 === "rock" && call === "scissors") {
        return "YOU LOOSE!!!ROCK BEATS SCISSORS!!!";
    } else if (call2 === "paper" && call === "rock") {
        return "YOU LOOSE!!!PAPER BEATS ROCK!!!"; 
    } else if (call2 === "scissors" && call === "paper") {
        return "YOU LOOSE!!!SCISSORS BEATS PAPER!!!";        
    } else  {
         return "TYPING ERROR"
     }
} 
console.log(outcome(pleasechoose(), computer));


function game() {
   let human = 0;
   let computer = 0;
   let gamenr = 0;
   for (let i = 0; i > 5; i++) {
    if (outcome(pleasechoose(), computer));``
    
     
   }
   return `GAME NR.${gamenr}  COMPUTER.${computer}  YOU.${human}`;
}
console.log(game());

