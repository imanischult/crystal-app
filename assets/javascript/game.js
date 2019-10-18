// Create a variable that chooses a random number between 1-12 for each cyrstals. 

// This generates a random number for the crystals (between 1 and 12)
// Math.round helps create a more random variable 
var blueCrystalNumber = Math.round(Math.random() * 10) + 2;
var pinkCrystalNumber = Math.round(Math.random() * 10) + 2;
var purpleCrystalNumber = Math.round(Math.random() * 10) + 2;
var orangeCrystalNumber = Math.round(Math.random() * 10) + 2;

console.log(blueCrystalNumber);

// This generates a random number for the goal (between 19 and 120)
var randomGoalNumber = Math.round(Math.random () * 101) + 19

console.log(randomGoalNumber); //it works!//


// Write global variables. 

var winScore = 0;
var lossScore = 0;
var totalWins = 0
var totalLosses = 0;
var score = 0;

// Reference DOM elements 

$("#goalnumber").text(randomGoalNumber);
$('#scorenumber').text(score);
$('#wins-number').text(totalWins);
$('#losses-number').text(totalLosses);


// This resets the random values whenever the function is ran

var newGame = function() {
    score = 0;
    randomGoalNumber = Math.round(Math.random () * 101) + 19;
    blueCrystalNumber = Math.round(Math.random() * 10) + 2;
    pinkCrystalNumber = Math.round(Math.random() * 10) + 2;
    purpleCrystalNumber = Math.round(Math.random() * 10) + 2;
    orangeCrystalNumber = Math.round(Math.random() * 10) + 2;
    $("#goalnumber").text(randomGoalNumber);
    $('#scorenumber').text(score);
}


// ************** GAME LOGIC BEGINS HERE ************** //



// Allow the page some time to load fully
$(document).ready(function(){

// If the score is less than the goal number
if (score < randomGoalNumber) {
        $('#blue').click(function() {
            score += blueCrystalNumber;
            $('#scorenumber').text(score); 

            console.log(score);

            // If the player loses, alert the user that s/he lost, increase loss score by 1, and run the newGame function
            if (score > randomGoalNumber) {
                alert (`Hmm...not quite. Let's try again.`);
                lossScore++;
                $('#losses-number').text(lossScore);
                newGame();


            // If the player wins, alert the user that s/he won, increase win score by 1, and run the newGame function
            } else if (score === randomGoalNumber) {
                alert (`Nice job!`);
                winScore++;
                $('#wins-number').text(winScore);
                newGame();
            }
   
        })

        // Repeat for all other crystal buttons

        $('#pink').click(function() {
            score += pinkCrystalNumber; 
            $('#scorenumber').text(score); 

            console.log(score);

            if (score > randomGoalNumber) {
                alert (`You can do this. Try again!`);
                lossScore++;
                $('#losses-number').text(lossScore);
                newGame();

            } else if (score === randomGoalNumber) {
                alert (`You won!`);
                winScore++;
                $('#wins-number').text(winScore);
                newGame();
            }
        })
    
        $('#purple').click(function() {
            score += purpleCrystalNumber;
            $('#scorenumber').text(score); 

            console.log(score);

            if (score > randomGoalNumber) {
                alert (`Uh oh. Ya lost buddy! Let's try again!`);
                lossScore++;
                $('#losses-number').text(lossScore);
                newGame();

            } else if (score === randomGoalNumber) {
                alert (`I see that brain workin'! You win!`);
                winScore++;
                $('#wins-number').text(winScore);
                newGame();
            }
        })

        $('#orange').click(function() {
            score += orangeCrystalNumber;
            $('#scorenumber').text(score); 

            console.log(score);

            if (score > randomGoalNumber) {
                alert (`You.....lost. Close though!`);
                lossScore++;
                $('#losses-number').text(lossScore);
                newGame();
                
            } else if (score == randomGoalNumber) {
                alert (`That choice was lit! You win!`);
                winScore++;
                $('#wins-number').text(winScore);
                newGame();
            }
        })
    

    }

})


