// html dom
var starterBtn = document.getElementById("start");
var containerEl = document.getElementById("container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("buttons");
var timeEl = document.getElementById("time-display");
var hiddenTimerEl = document.getElementById("timer");
var inputEl = document.getElementById("high-score-input");
var nameEl = document.getElementById("high-score");
var submitBtn = document.getElementById("submit-high-score");
var restartBtn = document.getElementById("restart");
var clearBtn = document.getElementById("clear-score");
var scoreList = document.getElementById("score-list");
var highScoreBtn = document.getElementById("scores-button")

// the if statements are checking if the buttons pressed or not, or else it would create errors

if (highScoreBtn) {
    highScoreBtn.addEventListener("click", function() {
        window.location.assign("highscores.html")
    })
}

if (submitBtn) {
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        score();
        renderScore();
        window.location.assign("highscores.html");
    });
}

if (restartBtn) {
    restartBtn.addEventListener("click", function() {
        window.location.assign("index.html");
    });
};

if (clearBtn) {
    clearBtn.addEventListener("click", function() {
        localStorage.clear();
        scoreList.innerHTML = "";
    });
};

if (starterBtn) {
    starterBtn.addEventListener("click", function () {
        startGame();
        timer();    
    });
}


// questions array
var questions = [
{ question: "Who is Iron Man?", 
    answers: ['Tony Stark', 'Tom Cruise', 'Natasha Romanov', 'Deadpool'], 
    correct: 'Tony Stark'
 },
{ question: "Who was the villain in Avengers:Endgame", 
    answers: ['Deadpool', 'Captain Marvel', 'Thanos', 'Ultron'], 
    correct: 'Thanos'
},
{ question: "Which one of these are not an infinity stone?", 
    answers: [ 'Soul Stone', 'Power Stone', 'Mind Stone', 'Teleport Stone'],
    correct: 'Teleport Stone'},
{ question: "Where did first Avengers movie was placed?", 
    answers: [ 'New York', 'Atlanta', 'Los Angeles', 'Chicago'], 
    correct: 'New York'
},
{ question: "On Avengers:Age of Ultron, who is lifting up the Mjolnir except Thor himself?",
     answers: [ 'Ultron', 'Iron Man', 'Captain America', 'Vision'], 
     correct: 'Vision'
}]

var answers = questions.answers; 
// setting the index for question to 0 so the loop can add the question to it
var questionIndex = 0;
// setting timer
var timeLeft = 100;
var timeCount;

// rendering the scores
function renderScore() {
    if (scoreList) {
        var listScores = [];
        
        if(localStorage.getItem("highScore")) {
            listScores = JSON.parse(localStorage.getItem("highScore"))
        };

        scoreList.innerHTML = "";

        listScores.forEach(function(score) {
            var listItemEl = document.createElement("li");
            listItemEl.textContent = JSON.stringify(score);
            scoreList.appendChild(listItemEl);
        })

    }   
}


// setting the scores to localstorage
function score() {
    var scores = [];

    if(localStorage.getItem("highScore")) {
        scores = JSON.parse(localStorage.getItem("highScore"));
    }

    var initial = nameEl.value;
    var remainingTime = JSON.stringify(timeLeft);
    var highScores = {
        name: initial,
        score: remainingTime,
    }
    scores.push(highScores);
    var stringOfScores = JSON.stringify(scores)
    localStorage.setItem("highScore", stringOfScores);
    renderScore();
}

// function when game ends
function endGame() {
    containerEl.classList.add("hide");
    hiddenTimerEl.classList.add("hide");
    inputEl.classList.remove("hide");
    
}

// the timer function
function timer() {
    timeCount = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            if (timeLeft <= 0) {
                timeLeft = 0;
            }
            alert("Time's up! Your score is : " + timeLeft);
            containerEl.classList.add("hide");
            clearInterval(timeCount);
            endGame();
        };
        
    }, 1000) 
}

// checking to see if the questions is true or not
function selectedAnswer(event) {
   if (event.target.textContent !== questions[questionIndex].correct) {
       timeLeft -= 10;
   }

   questionIndex++;
   
   if (questionIndex !== questions.length) {
       startGame();
   } else {

       alert("Game Over! Your score is : " + timeLeft);
       clearInterval(timeCount);
       endGame();    
   }
}

// starting the game
function startGame() {
    starterBtn.classList.add("hide");
    highScoreBtn.classList.add("hide");
    containerEl.classList.remove("hide");
    hiddenTimerEl.classList.remove("hide");
    questionEl.textContent = questions[questionIndex].question;
    answerEl.innerHTML = "";
    for (var i = 0; i < questions[questionIndex].answers.length; i++) {
        var newAnswer = questions[questionIndex].answers[i];
        var answerButton = document.createElement("button");
        answerButton.classList.add("button")
        answerButton.textContent = newAnswer;
        answerButton.addEventListener("click", selectedAnswer);
        answerEl.appendChild(answerButton);
    }
    
}



function init() {
    renderScore();
}

init();