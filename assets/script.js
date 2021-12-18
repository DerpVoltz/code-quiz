var pageTimer = document.querySelector("#timer");
var startBtn = document.querySelector("#startbtn");
var quizQuestion = document.querySelector("#question");
var header = document.querySelector("#header")
var quizAnswers = document.querySelector("#answers")
var correctness = document.querySelector("#correctness");

function countdown() {
    var timeInterval = 10;

    var countdownTimer = setInterval(function() {
        if(timeInterval >= 1){
            pageTimer.textContent = timeInterval;
            timeInterval--;
        } else {
            pageTimer.textContent = "0";
            clearInterval(countdownTimer);
        }
    }, 1000);
}

function quizStart() {
    countdown();
    header.textContent = "";
    startBtn.remove();
    quizQuestion.textContent = "Who did the axis consist of in world war 2";
    answerSelection("germany", "ireland", "america", "england");
}

function answerSelection(answer1, answer2, answer3, answer4) {
    var container1 = document.createElement("li");
    var container2 = document.createElement("li");
    var container3 = document.createElement("li");
    var container4 = document.createElement("li");

    quizAnswers.appendChild(container1);
    quizAnswers.appendChild(container2);
    quizAnswers.appendChild(container3);
    quizAnswers.appendChild(container4);

    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");

    button1.textContent = answer1;
    button2.textContent = answer2;
    button3.textContent = answer3;
    button4.textContent = answer4;

    container1.appendChild(button1);
    container2.appendChild(button2);
    container3.appendChild(button3);
    container4.appendChild(button4);

}

function wrongAnswer() {
    var time = 1;
    correctness.textContent = "Wrong";
    var wrong = setInterval(function() {
        if(time >=1) {
            time--;
        } else {
            correctness.textContent = "";
            clearInterval(wrong);
        }
    }, 1000);
    
}

function correctAnswer() {
    var time = 1;
    correctness.textContent = "Correct";
    var correct = setInterval(function() {
        if(time >=0) {
            time--;
        } else {
            correctness.textContent = "";
            clearInterval(correct);
        }
    }, 1000);
    
}



startBtn.addEventListener("click", quizStart);