**GIVEN I am taking a code quiz;**

**WHEN I click the start button**
**THEN a timer starts and I am presented with a question** 
**Answer:** 
*I have created a seperated HTML file from the main menu (index.html) and added an anchor tag with a href to the game.html which contains the questions.*


**WHEN I answer a question**
**THEN I am presented with another question**
**Answer:**
*In my game.html i have put containers that display where the question will be and the buttons for the answers. From there in Javascript I have pulled the elements via "document.querySelector" and made them variables to be maniulated. the question container then has an array inside it which containers the questions and answers.* 


**WHEN I answer a question incorrectly**
**THEN time is subtracted from the clock**
**Answer:**
**

**WHEN all questions are answered or the timer reaches 0**
**THEN the game is over**
**Answer:**
**


**WHEN the game is over**
**THEN I can save my initials and my score**
**Answer:**
*Once the game is completed then it will rediect you to another HTML (end.html) which has the score and the text input but with the submit button. Once submitted then it will rediect you to the last HTML (highscores.html) which displays the previous scores and a button to go back to the main menu.*