var userChoice = prompt("May I interest you in rock, paper, or scissors?");
var computerChoice = Math.random();
if (computerChoice >= 0 && computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    computerChoice = "paper"
} else {
    computerChoice = "scissors"
}

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!"
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins"
        } else {
            return "paper wins"
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins"
        } else {
            return "scissors wins"
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins"
        } else {
            return "scissors wins"
        }
    }

}

document.write("Player ----> " + userChoice + "<hr>");
document.write("Computer ----> " + computerChoice + "<hr>"); 
document.write("RESULTS ====> " +  compare(userChoice, computerChoice));