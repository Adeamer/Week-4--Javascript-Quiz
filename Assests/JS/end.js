var initials = document.querySelector("#initials");
var submitbtn = document.querySelector("#submitbtn");
var highscores = document.querySelector("#highscores");
var HSbtn = document.querySelector("#HSbtn");
var timer = document.querySelector("#countdown");


window.localStorage.setItem("Initial", initials);
window.localStorage.setItem("Time Stamp", JSON.stringify());

// When either the submit or highscore button is pressed on the end.html the input screen will change to the highscore screen.
submitbtn.onclick = function(){
    console.log(submitbtn)
    highscores.classList.remove("hidden");
    document.getElementById("Results").classList.add("hidden");
};

HSbtn.onclick = function(){
    console.log(HSbtn)
    highscores.classList.remove("hidden");
    document.getElementById("Results").classList.add("hidden");
};  

function manage() {
   if (initials.value != " "){
        submitbtn.disabled = false;
   }
   else {
        submitbtn.disabled = true;
   }
}