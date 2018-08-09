

var gem1 = Math.floor(Math.random() * 9 + 1);
var gem2 = Math.floor(Math.random() * 9 + 1);
var gem3 = Math.floor(Math.random() * 9 + 1);
var gem4 = Math.floor(Math.random() * 9 + 1);

console.log("Gem 1 " + gem1)
console.log("Gem 2 " + gem2)
console.log("Gem 3 " + gem3)
console.log("Gem 4 " + gem4)

var numNeeded = Math.floor(Math.random() * 70 + 1);

var wins = 0;
var losses = 0;
var totalScore = 0;
console.log("Total Score: " + totalScore);

function reset() {
    totalScore = 0;

    gem1 = Math.floor(Math.random() * 8 + 1);
    gem2 = Math.floor(Math.random() * 9 + 1);
    gem3 = Math.floor(Math.random() * 8 + 1);
    gem4 = Math.floor(Math.random() * 9 + 1);

    numNeeded = Math.floor(Math.random() * 70 + 1);

    $('#numNeeded').text("Number Needed: " + numNeeded);
    console.log("Random Number Generated: " + numNeeded);
    $("#score").text(totalScore);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

}

$('#numNeeded').text("Number Needed: " + numNeeded);
console.log("Random Number Generated: " + numNeeded);
$("#score").text(totalScore);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

$("#gem1").on("click", function () {
    totalScore = totalScore + gem1;
    console.log("Updated Score: " + totalScore);
    $("#score").text(totalScore);
    if (totalScore === numNeeded) {
        wins++;
        reset();
    }
    else if (totalScore > numNeeded) {
        losses++;
        reset();
    }
})

$("#gem2").on("click", function () {
    totalScore = totalScore + gem2;
    console.log("Updated Score: " + totalScore);
    $("#score").text(totalScore);
    if (totalScore === numNeeded) {
        wins++;
        reset();
    }
    else if (totalScore > numNeeded) {
        losses++;
        reset();
    }
})

$("#gem3").on("click", function () {
    totalScore = totalScore + gem3;
    console.log("Updated Score: " + totalScore);
    $("#score").text(totalScore);
    if (totalScore === numNeeded) {
        wins++;
        reset();
    }
    else if (totalScore > numNeeded) {
        losses++;
        reset();
    }
})

$("#gem4").on("click", function () {
    totalScore = totalScore + gem4;
    console.log("Updated Score: " + totalScore);
    $("#score").text(totalScore);
    if (totalScore === numNeeded) {
        wins++;
        reset();
    }
    else if (totalScore > numNeeded) {
        losses++;
        reset();
    }
})