//bringing over HTML elements from the game.html//

var question = document.querySelector("#question");
var choices = document.querySelectorAll(".choice-text");
var choicebtns = document.querySelectorAll(".choice-container");
var highscores = document.querySelector("#highscores");




var currentQuestion = {};
var acceptingAnswers = true;
var questionCounter = 0;
var availableQuestions = {};

//inputting questions inside the the question div in game.html//

 let questions = [
    {
        question: "What can a Boolean values be?",
        choice1: "True or False",
        choice2: "Yes or No",
        choice3: "String only",
        choice4: "Numbers",
        answer: 1,
    },
    {
        question: "What is an if statment?",
        choice1: "Function",
        choice2: "Variable",
        choice3: "Loop",
        choice4: "Conditional Statement",
        answer: 4,
    },
    {
        question: "What does != mean?",
        choice1: "Equals to",
        choice2: "Not equal to",
        choice3: "True",
        choice4: "Multiply",
        answer: 2,
    },
    {
        question: "What does the Console.log do?",
        choice1: "Enables a loop funtion to happen",
        choice2: "A way to call a function",
        choice3: "Shows a value of a nominated variable in the console tab in devtools",
        choice4: "Use to pull a HTML element into the JS file to be manipulated",
        answer: 3,
    }
];



var MAX_QUESTIONS = 4;

function startgame () {
    questionCounter = 0
    availableQuestions = [...questions]
    getNewQuestions(0)
};

function getNewQuestions(questionsIndex) {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {

        return window.location.assign("./end.html")
    }

    currentQuestions = availableQuestions[questionsIndex]
    question.textContent = currentQuestions.question
    
    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestions["choice" + number]
    })
    availableQuestions.splice(questionsIndex, 1)
    console.log(availableQuestions)

    acceptingAnswers = true
};

choicebtns.forEach(item => {
    console.log('item', item)
    item.addEventListener("click", function() {
        getNewQuestions(0)
        console.log("clicked")
    })
})

//function for the timer//
var timeleft = 30;
var downloadTimer = setInterval(function(){
    console.log(timeleft);
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    if (window.confirm('Game Over!'))
    {
        alert('Set Highscore');
        window.location = './end.html';
    }
    else
    {
        window.localStorage.setItem("Time Stamp", timer);
    }
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);



//calling the start game function//
startgame();