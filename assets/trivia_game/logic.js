

var trivia = {
    index: "",
    correct: 0,
    incorrect: 0,
    missed: 0,
    questionCounter: 0,
    timeCounter: 15,
    HTML: "",
    questions: [
        "How many pancakes to shingle a doghouse?", "Javascript is considered a?", "How many continents on Earth?", "Which was the first US state?",
        "Which year was the Great Chicago Fire"],
    answer: [
        [" 2", " about 45", " not sure", " google it?"], [" Scripting Language", " Markup Language", " Way of life.", " Pain."], [" 3", " 8", " 7", " 12"],
        [" Maine", " Georgia", " Delaware", " Maryland"], [" 1923", " 1790", " 1871", " What fire?"],],
    correctAnswers: [" about 45", " Scripting Language", " 7", " Delaware", " 1871"],
    clock: "",
};

function timer() {
    trivia.clock = setInterval(seconds, 1000);
    function seconds() {
        if (trivia.timeCounter === 0) {
            timeOut();
            clearInterval(trivia.clock);
        }
        if (trivia.timeCounter > 0) {
            trivia.timeCounter--;
        }
        $(".timer").html(trivia.timeCounter);
    }
};

function startScreen() {
    trivia.index = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button text-center' href='#'>Begin</a></p>";
    $(".main-area").html(trivia.index);
};

function win() {
    trivia.correct++;
    trivia.HTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" +
        "<p class='text-center'>Correct. Answer:" + trivia.correctAnswers[trivia.questionCounter] + "</p>";
    $(".main-area").html(trivia.HTML);
    setTimeout(wait, 2000);
};

function loss() {
    trivia.incorrect++;
    trivia.HTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" +
        "<p class='text-center'>Wrong! Answer is: " + trivia.correctAnswers[trivia.questionCounter] + "</p>";
    $(".main-area").html(trivia.HTML);
    setTimeout(wait, 2000);
};

function timeOut() {
    trivia.missed++;
    trivia.HTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter +
        "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + trivia.correctAnswers[trivia.questionCounter] + "</p>";
    $(".main-area").html(trivia.HTML);
    setTimeout(wait, 2000);
};

function wait() {
    if (trivia.questionCounter < 4) {
        trivia.questionCounter++;
        generateHTML();
        trivia.timeCounter = 15;
        timer();
    }
    else {
        finalScreen();
    }
};

function finalScreen() {
    trivia.HTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Results: " +
        "</p>" + "<p class='summary-correct'>Correct Answers: " + trivia.correct + "</p>" + "<p>Wrong Answers: " + trivia.incorrect + "</p>" + "<p>Unanswered: " + trivia.missed +
        "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset</a></p>";
    $(".main-area").html(trivia.HTML);
};

function resetGame() {
    trivia.questionCounter = 0;
    trivia.correct = 0;
    trivia.inCorrectCounter = 0;
    trivia.missed = 0;
    trivia.timeCounter = 15;
    generateHTML();
    timer();
};

function generateHTML() {
    trivia.HTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>15</span></p><p class='text-center'>" + trivia.questions[trivia.questionCounter] +
        "</p><button class='first-answer answer'>" + trivia.answer[trivia.questionCounter][0] + "</button><br><button class='answer'>" + trivia.answer[trivia.questionCounter][1]
        + "</button><br><button class='answer'>" + trivia.answer[trivia.questionCounter][2] + "</button><br><button class='answer'>" + trivia.answer[trivia.questionCounter][3] + "</button>";
    $(".main-area").html(trivia.HTML);
}

startScreen();

$("body").on("click", ".start-button", function (event) {
    event.preventDefault();
    generateHTML();
    timer();
});

$("body").on("click", ".answer", function () {
    selection = $(this).text();
    console.log(selection)
    if (selection === trivia.correctAnswers[trivia.questionCounter]) {

        clearInterval(trivia.clock);
        win();
    } else {

        clearInterval(trivia.clock);
        loss();
    }
});

$("body").on("click", ".reset-button", function (event) {
    resetGame();
});