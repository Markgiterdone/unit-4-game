

// --------------------- Variables below ----------------------
var wins = 0;
var losses = 0;
// var to hold current game score count
var currentScore = 0;
// target score holder and min max values
var targetScore;
var tsMin = 50;
var tsMax = 100;
// diamond value curent game value and min max values
var diamondValue;
var dvMin = 1;
var dvMax = 4;
// emerald value curent game value and min max values
var emeraldValue;
var evMin = 5;
var evMax = 8;
// ruby value curent game value and min max values
var rubyValue;
var rvMin = 10;
var rvMax = 16;
// ruby value curent game value and min max values
var sapphireValue;
var svMin = 16;
var svMax = 21;

var imageArr = [];


//------------------------- Start Game below --------------------

// remember to add    $(document).ready   and then enclose all in {}

startGame();

// SET THE IMAGE AND ASSIGN THE VALUE RUN THE GAME
// --------------  DIAMOND -----------------------
// Created a click event for Diamond.
$(".diamond").on("click", function() {
    // Each time the user clicks the crystal the counter goes up by the assigned value of diamond
    currentScore = currentScore + diamondValue;
    checkWinLoss();
});
// --------------  EMERALD -----------------------
// Here we created a click event for Emerald.
$(".emerald").on("click", function() {
    // Each time the user clicks the crystal the counter goes up by the assigned value of diamond
    currentScore = currentScore + emeraldValue;
    checkWinLoss();
});
// --------------  RUBY -----------------------
// Here we created a click event for Ruby.
$(".ruby").on("click", function() {
    // Each time the user clicks the crystal the counter goes up by the assigned value of diamond
    currentScore = currentScore + rubyValue;
    checkWinLoss();
});
// --------------  SAPPHIRE -----------------------
// Here we created a click event for Emerald.
$(".sapphire").on("click", function() {
    // Each time the user clicks the crystal the counter goes up by the assigned value of diamond
    currentScore = currentScore + sapphireValue;
    checkWinLoss();
});


// ********************** FUNCTIONS BELOW **************

function startGame () {
    // SET RANDOM VAUES FOR THE START OF EACH NEW GAME
    // set new random value for target score
    targetScore =Math.floor(Math.random() * (+tsMax - +tsMin)) + +tsMin;
    console.log(targetScore);
    $("#numberToGuess").text(targetScore);
    
    // set new random value for diamond
    diamondValue =Math.floor(Math.random() * (+dvMax - +dvMin)) + +dvMin;
    console.log(diamondValue);
    
    // set new random value for emerald
    emeraldValue =Math.floor(Math.random() * (+evMax - +evMin)) + +evMin;
    console.log(emeraldValue);
    
    // set new random value for ruby
    rubyValue =Math.floor(Math.random() * (+rvMax - +rvMin)) + +rvMin;
    console.log(rubyValue);
    
    // set new random value for sapphire
    sapphireValue =Math.floor(Math.random() * (+svMax - +svMin)) + +svMin;
    console.log(sapphireValue);
    //document.write("Random Number Generated : " + sapphireValue); 

    // Set begining current value back to zero
    currentScore = 0;
    
    // place those individual values into an array
    imageArr = [diamondValue,emeraldValue,rubyValue,sapphireValue];
    console.log(imageArr);
}


// Function to check for win loss condition and action
function checkWinLoss () {
sumCount = currentScore;
$("#sumCount").text(currentScore);
console.log(sapphireValue);
console.log(currentScore);
if (currentScore === targetScore) {
    alert("You win!");
    wins = wins + 1;
    $("#winCount").text(wins);
    return startGame();
}
else if (currentScore > targetScore) {
    alert("Sorry.  Number went over.  You lose.");
    losses = losses +1;
    $("#lossesCount").text(losses);
    return startGame();
};
}

