GIVEN I am taking a code quiz
create an event 'start quiz' button
WHEN I click the start button
// create a var timeInterval = setInterval function
THEN a timer starts and I am presented with a question
//create a series of questions
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
//i --
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
//localStorage 
THEN I can save my initials and score