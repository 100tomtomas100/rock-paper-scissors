function pleasechoose() { 
//    let humanChoice = prompt("Please choose ROCK, PAPER or SCISSORS"); 
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

function game() {
   let human = 0;
   let computer = 0;
   let gamenr = 0;   
   for (let i = 1; i < 6; i++) {
       let computer2 = computerPlay();
       let human2 = pleasechoose();
       let games = outcome(human2, computer2);       
       computer3 = computer2.toUpperCase();       
       human3 = human2.toUpperCase();
       gamenr = i;
       console.log(`ROUND ${gamenr}`);
       console.log(`COMPUTER:${computer3} YOU:${human3}`);
       console.log(games);   
       console.log(" ");
       if (games.slice(0, 9) == "YOU LOOSE") {
           computer += 1;
       } else if (games.slice(0, 7) == "YOU WIN") {
           human += 1;
       } else {
           human += 0;
       }
     
   }
   let tie = 5 - computer - human;
   return `GAMES.${gamenr}  COMPUTER.${computer}  YOU.${human} TIE.${tie}`;
}

console.log(game());



