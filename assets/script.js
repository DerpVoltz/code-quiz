var pageTimer = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");
var quizQuestion = document.querySelector("#question");
var header = document.querySelector("#header")
var quizAnswers = document.querySelector("#answers")
var correctness = document.querySelector("#correctness");
var playerForm = document.querySelector("#name-form");
var highScores = document.querySelector("#high-scores-page");
var scoreList = document.querySelector("#high-score-list");
var scoreButton = document.querySelector("#view-scores");
var clearButton = document.querySelector("#clear");
var backButton = document.querySelector("#go-back");
var savedScores = [];
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
var timeInterval = 80;
playerForm.style.visibility = "hidden";
startBtn.style.visibility = "visible";
clearButton.style.visibility = "hidden";
backButton.style.visibility = "hidden";

function formHandler(event) {
    event.preventDefault();
    var oldScores = localStorage.getItem("highscores");
    oldScores = JSON.parse(oldScores);
    savedScores.push(oldScores);
    var playerName = document.querySelector("input[name='player-form']").value;
    if (playerName.length < 2 || playerName.length > 2) {
        alert("Make sure you enter your initials!")
    } else {
        console.log(playerName);

        playerScore = {
            name: playerName,
            score: (timeInterval + 1)
        }
        savedScores.push(playerScore);
        localStorage.setItem("highscores", JSON.stringify(savedScores));
        highScorePage();
    }

}

function quizMain() {
    clearButton.style.visibility = "hidden";
    backButton.style.visibility = "hidden";
    startBtn.style.visibility = "visible";
    header.textContent = "Coding Quiz";
    quizQuestion.textContent = "Try to answer the following code questions within the time limit. Keep in mind that inccorect answers will penalize your score/time by ten seconds!"
}

function highScorePage() {
    clearButton.style.visibility = "visible";
    backButton.style.visibility = "visible";
    playerForm.style.visibility = "hidden";
    header.textContent = "High Scores"
    var oldScores = localStorage.getItem("highscores");
    oldScores = JSON.parse(oldScores);
    quizQuestion.textContent = "High Scores: ";
    for(i = 0; i < savedScores.length; i++) {
        var score = document.createElement("li")
        score.textContent =  savedScores[i].name + " - " + savedScores[i].score;
        scoreList.appendChild(score);
    }
    
    


}

function countdown() {
    pageTimer.textContent = timeInterval;
    countdownTimer = setInterval(function() {
        pageTimer.textContent = timeInterval;
        if(timeInterval > 0){
            pageTimer.textContent = timeInterval;
            timeInterval--;
        } else {
            gameOver();
        }
    }, 1000);
    quizStart();
}

function quizStart() {
    header.textContent = "";
    startBtn.style.visibility = "hidden";
    quizQuestion.textContent = "Commonly used data types DO NOT inlcude:";
    answerSelection("alerts", "strings", "booleans", "numbers");
    button1.addEventListener("click", question2);
    button2.addEventListener("click", function() {
        question2(false);
    })
    button3.addEventListener("click", function() {
        question2(false);
    })
    button4.addEventListener("click", function() {
        question2(false);
    })
}

function question2(correct) {

    if(correct) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
    quizQuestion.textContent = "The condition in an if / else statement is enclosed within ____.";
    newButtonText("curly brackets", "quotes", "parentheses", "square brackets");
    button3.addEventListener("click", question3);
    button2.addEventListener("click", function() {
        question3(false);
    })
    button1.addEventListener("click", function() {
        question3(false);
    })
    button4.addEventListener("click", function() {
        question3(false);
    })
}

function question3(correct) {

    if(correct) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
    quizQuestion.textContent = "Arrays in JavaScript can be used to store ____.";
    newButtonText("numbers and strings", "booleans", "other arrays", "all of the above");
    button4.addEventListener("click", question4);
    button1.addEventListener("click", function() {
        question4(false);
    })
    button3.addEventListener("click", function() {
        question4(false);
    })
    button2.addEventListener("click", function() {
        question4(false);
    })
}

function question4(correct) {

    if(correct) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
    quizQuestion.textContent = "String values must be enclosed within ____ when being assigned to variables.";
    newButtonText("quotes", "commas", "parentheses", "curly brackets");
    button1.addEventListener("click", question5);
    button2.addEventListener("click", function() {
        question5(false);
    })
    button3.addEventListener("click", function() {
        question5(false);
    })
    button4.addEventListener("click", function() {
        question5(false);
    })
}

function question5(correct) {

    if(correct) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
    quizQuestion.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    newButtonText("terminal/bash", "console log", "for loops", "JavaScript");
    button2.addEventListener("click", gameOver);
    button4.addEventListener("click", function() {
        gameOver(false);
    })
    button3.addEventListener("click", function() {
        gameOver(false);
    })
    button1.addEventListener("click", function() {
        gameOver(false);
    })
}   

function newButtonText(answer1, answer2, answer3, answer4) {
    button1.textContent = answer1;
    button2.textContent = answer2;
    button3.textContent = answer3;
    button4.textContent = answer4;
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
    timeInterval = timeInterval - 10;
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
        if(time >=1) {
            time--;
        } else {
            correctness.textContent = "";
            clearInterval(correct);
        }
    }, 1000);
    
}

function gameOver(correctness) {
    clearInterval(countdownTimer);
    if(correctness) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
    while (quizAnswers.firstChild) {
        quizAnswers.removeChild(quizAnswers.firstChild);
    }
    header.textContent = "All Done!";
    if (timeInterval === 0) {
        quizQuestion.textContent = "Your highscore is: " + timeInterval;
    } else {
        quizQuestion.textContent = "Your highscore is: " + (timeInterval + 1);
    }
    playerForm.style.visibility = "visible";
}

function storeScore() {
    localStorage.setItem()
}



startBtn.addEventListener("click", countdown);
playerForm.addEventListener("submit", formHandler);
scoreButton.addEventListener("click", highScorePage);
backButton.addEventListener("click", quizMain);
clearButton.addEventListener("click", function(){
    localStorage.clear()
})