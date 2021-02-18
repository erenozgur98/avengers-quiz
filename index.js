// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// html dom
var starterBtn = document.getElementById("start");
var containerEl = document.getElementById("container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("buttons");

var setQuestion;
var questionIndex;

// questions array
var questions = [
{
    question: "Who is Iron Man?",
    answers: [
        { text: 'Tony Stark', correct: true },
        { text: 'Tom Cruise', correct: false },
        { text: 'Natasha Romanov', correct: false },
        { text: 'Deadpool', correct: false} 
    ]
},
{
    question: "Who was the villain in Avengers:Endgame",
    answers: [
        { text: 'Deadpool', correct: false },
        { text: 'Captain Marvel', correct: false },
        { text: 'Thanos', correct: true },
        { text: 'Ultron', correct: false }
    ]
},
{
    question: "Which one of these are not an infinity stone?",
    answers: [
        { text: 'Soul Stone', correct: false },
        { text: 'Power Stone', correct: false },
        { text: 'Mind Stone', correct: false },
        { text: 'Teleport Stone', correct: true }
    ]
},
{
    question: "Where did first Avengers movie was placed?",
    answers: [
        { text: 'New York', correct: true },
        { text: 'Atlanta', correct: false },
        { text: 'Los Angeles', correct: false },
        { text: 'Chicago', correct: false }
    ]
},
{
    question: "On Avengers:Age of Ultron, who is lifting up the Mjolnir except Thor himself?",
    answers: [
        { text: 'Ultron', correct: false },
        { text: 'Iron Man', correct: false },
        { text: 'Captain America', correct: false },
        { text: 'Vision', correct: true }
    ]

}];
 
function init() {
    
}


function gameStart() {
    starterBtn.classList.add("hide");
    setQuestion = questions.sort(() => Math.random());
    questionIndex = 0;
    containerEl.classList.remove("hide"); 
    nextQuestion();
}

starterBtn.addEventListener("click", gameStart);

function nextQuestion() {
    showQuestion(setQuestion[questionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answers => {
        var answerButton = document.createElement("button");
        answerButton.innerText = answers.text;
        answerButton.classList.add("button");
        if (answers.correct) {
            answerButton.dataset.correct = answers.correct;
        }
        answerButton.addEventListener("click", selectedAnswer)
        answerEl.appendChild(answerButton);
    })
}


function selectedAnswer(event) {
    var choosenAnswer = event.target;
    var correct = choosenAnswer.dataset.correct;
    if (choosenAnswer !== correct) {
        questionIndex++
        nextQuestion();
    } else {
        alert("WRONG");
    }


}


function gameWon() {

}

function gameLost() {

}

// function timer() {    
//     var time = 10;
//     var timer = document.getElementById("timer");
//     setInterval(function() {
//         if(time > 0){
//             timer.textContent = "Time: " + time;
//             time--;
//         } else {
//             timer.textContent = "Game Over!";
//         }
//     }, 1000);
// }


























// starterBtn.addEventListener("click", timer);



// var guessWord;
// var guessWordChars;

// function setWord() {
//     guessWord = guessWords[Math.floor(Math.random() * guessWords.length)];
//     guessWordChars = guessWord.length;
//     return;
// }

// starterBtn.addEventListener("click", function () {
//     console.log("start the game");
//     var randomIndex = Math.floor(Math.random() = questions.length);
//     var selectedWord = questions[randomIndex];

//     var blank = "";
//     for (var i = 0; i < selectedWord.length; i++) {
//         blank += "_";
//     }
//     console.log(blank);

//     var randomLetterIndex = Math.floor(Math.random() = selectedWord.length);
//     var randomLetter = selectedWord[randomLetterIndex];
//     console.log(randomLetter)
// })