//bringing over HTML elements from the game.html//

var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var highscores = document.querySelector("#highscores");
var time = document.querySelector("#timer");


let currentQuestion = {}
let acceptingAnswers = true
let timer = 100
let questionCounter = 0
let availableQuestions = {}

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
]



var MAX_QUESTIONS = 4

startgame = () => {
    questionCounter = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {

        retur window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = "Question ${questionCounter} of ${MAX_QUESTIONS}"
    progressBarFull.style.width = "${(questionCounter/MAX_QUESTIONS) * 100}%"

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestions = availableQuestions [questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset ["number"]
        choice.innerText = currentQuestions ["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}




startgame()