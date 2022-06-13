
const rock = document.getElementById("rock")
rock.addEventListener("click", () => {
     round ("rock")
})
const paper = document.getElementById("paper")
paper.addEventListener("click", () => {
    round("paper")
})
const scissors = document.getElementById("scissors")
scissors.addEventListener("click", () => {
    round("scissors")
})

function computerPlay() {
    const choices = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    let random = choices[Math.floor(Math.random() * choices.length)];
    return  random.toLowerCase();
}

function outcome(call, call2) {
    if (call === call2) {
        return "NOBODY WINS TRY AGAIN!!!";
     } else if (call === "rock" && call2 === "scissors") {
         return "YOU WIN!!! ROCK BEATS SCISSORS!!!";
     } else if (call === "paper" && call2 === "rock") {
         return "YOU WIN!!! PAPER BEATS ROCK!!!"; 
     } else if (call === "scissors" && call2 === "paper") {
         return "YOU WIN!!! SCISSORS BEATS PAPER!!!"; 
     } else if (call2 === "rock" && call === "scissors") {
        return "YOU LOOSE!!! ROCK BEATS SCISSORS!!!";
    } else if (call2 === "paper" && call === "rock") {
        return "YOU LOOSE!!! PAPER BEATS ROCK!!!"; 
    } else if (call2 === "scissors" && call === "paper") {
        return "YOU LOOSE!!! SCISSORS BEATS PAPER!!!";        
    } else  {
         return "TYPING ERROR"
     }
} 


   
    
   let humanScore = 0;
   let computerScore = 0;
   let gamenr = 0;   
   let tie = 0;
   
   function round(choice) {
       let computer2 = computerPlay();
       let human2 = choice;
       let games = outcome(human2, computer2);      
   
       if (games.slice(0, 9) == "YOU LOOSE") {
           computerScore += 1;
           gamenr +=1;
       } else if (games.slice(0, 7) == "YOU WIN") {
           humanScore += 1;
           gamenr += 1;
       } else {
           tie += 1;
           gamenr += 1;
       } 
    
       computer3 = computer2.toUpperCase();       
       human3 = human2.toUpperCase();   
      
       const upper = document.getElementById("uppertext");
       upper.innerText = `ROUND ${gamenr}`;
       upper.style.color = "black"
       const upper2 = document.getElementById("uppertext2");
       upper2.textContent = `COMPUTER: ${computer3}`;
       const upper3 = document.getElementById("uppertext3");
       upper3.textContent = `YOU: ${human3}`;
       upper2.style.fontWeight = "800";
       upper3.style.fontWeight = "800";
       const lowertext = document.getElementById("lowertext");
       lowertext.textContent = games; 
       lowertext.style.fontWeight = "800";    
       const computerre = document.getElementById("computer");
       computerre.textContent = `COMPUTER: ${computerScore}`;
       computerre.style.fontWeight = "800"; 
       const humanre = document.getElementById("you");
       humanre.textContent = `YOU: ${humanScore}`;
       humanre.style.fontWeight = "800"; 
       const tiere = document.getElementById("tie");
       tiere.textContent = `TIE:${tie}`
       tiere.style.fontWeight = "800";
   if (computerScore >= 5) {
       const upperrem = document.getElementById("para");
       upperrem.style.visibility = "hidden";
       const lowerrem = document.getElementById("lowertext");
       lowerrem.style.visibility = "hidden";
       upper.innerText = "YOU LOOSE!!!" 
       paper.disabled = true;
    rock.disabled = true;
    scissors.disabled = true;
   }  else if (humanScore >= 5){
    const upperrem = document.getElementById("para");
    upperrem.style.visibility = "hidden";
    const lowerrem = document.getElementById("lowertext");
    lowerrem.style.visibility = "hidden";
    upper.innerText = "YOU WIN!!!" 
    paper.disabled = true;
    rock.disabled = true;
    scissors.disabled = true;
   }
   
    
   } 




