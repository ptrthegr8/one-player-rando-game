var userChoice = prompt("Which will be your champion: Charmander, Squirtle, or Bulbasaur? (not caps-sensitive)");
var computerChoice = Math.random();
if (computerChoice >= 0 && computerChoice <= 0.33) {
    computerChoice = "Charmander";
} else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    computerChoice = "Squirtle";
} else {
    computerChoice = "Bulbasaur";
}

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    } else if (choice1 === "Charmander" || choice1 === "charmander" || choice1 === "CHARMANDER") {
        if (choice2 === "Bulbasaur") {
            return "Charmander wins!";
        } else {
            return "Squirtle wins :-(";
        }
    } else if (choice1 === "Squirtle" || choice1 === "squirtle" || choice1 === "SQUIRTLE" ) {
        if (choice2 === "Charmander") {
            return "Squirtle wins!";
        } else {
            return "Bulbasaur wins :-(";
        }
    } else if (choice1 === "Bulbasaur" || choice1 === "bulbasaur" || choice1 === "BULBASAUR" ) {
        if (choice2 === "Charmander") {
            return "Charmander wins :-(";
        } else {
            return "Bulbasaur wins!";
        }
    }

}
//add text to page
function printResult(text, headerText) {
    var myHeader = document.createElement("h2");
    var h = document.createTextNode(headerText);
    myHeader.appendChild(h);
    document.body.appendChild(myHeader);
    //headerText code above
    var myDiv = document.createElement("div"); // Create a <div> element
    var t = document.createTextNode(text); // Create a text node
    myDiv.appendChild(t); // Append the text to <div>
    document.body.appendChild(myDiv);
    //div code above
}

//add text to page


//adds click event
handleClick = function (event) {
    var cell = event.target
    console.log(cell.id);
}

var cells = document.querySelectorAll("td");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
}
//adds click event   


printResult(userChoice.toUpperCase(), "Player:");
printResult(computerChoice.toUpperCase(), "Computer:");
printResult(compare(userChoice, computerChoice), "RESULTS:");
alert(compare(userChoice, computerChoice));