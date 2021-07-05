//bringing over HTML elements from the game.html//

var question = document.querySelector("#question");
var choices = document.querySelectorAll(".choice-text");
var highscores = document.querySelector("#highscores");
var time = document.querySelector("#timer");


var currentQuestion = {};
var acceptingAnswers = true;
var questionCounter = 0;
var availableQuestions = {};

//inputting questions inside the the question div in game.html//

 let questions = [
    {
        question: "What is 1 + 1?",
        choice1: "2",
        choice2: "4",
        choice3: "17",
        choice4: "3",
        answer: 1,
    },
    {
        question: "What is 1 + 2?",
        choice1: "2",
        choice2: "4",
        choice3: "17",
        choice4: "3",
        answer: 4,
    },
    {
        question: "What is 1 + 3?",
        choice1: "2",
        choice2: "4",
        choice3: "17",
        choice4: "3",
        answer: 2,
    },
    {
        question: "What is 16 + 1?",
        choice1: "2",
        choice2: "4",
        choice3: "17",
        choice4: "3",
        answer: 3,
    }
];



var MAX_QUESTIONS = 4;

startgame = () => {
    questionCounter = 0
    availableQuestions = [...questions]
    getNewQuestions()
};

getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {

        retur window.location.assign("./end.html")
    }

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestions = availableQuestions [questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset ["number"]
        choice.innerText = currentQuestions ["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
};

//make a function to display the questions//
function showQuestions (){

};

//function for the timer//
var timeleft = 30;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Game Over";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);


//Store results in local storage and on the highscore page//

//calling the start game function//
startgame();