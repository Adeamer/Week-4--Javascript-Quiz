var initials = document.querySelector("#initials");
var submitbtn = document.querySelector("#submitbtn");
var highscores = document.querySelector("#highscores");
var HSbtn = document.querySelector("#HSbtn");
var timer = document.querySelector("#countdown");
var initialsvalue = initials.value.trim();








// When either the submit or highscore button is pressed on the end.html the input screen will change to the highscore screen.
submitbtn.onclick = function(){
    
    highscores.classList.remove("hidden");
    document.getElementById("Results").classList.add("hidden");
    localStorage.setItem("Initial", JSON.stringify(initialsvalue));
    console.log(initialsvalue);
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