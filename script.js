var timeDisplay = document.getElementById("timer");
var interfaceDisplay = document.getElementById ("interface");
var trueOrFalseDisplay = document.getElementById("true-or-false");

var playersScore = [];
var currentQuestion = 0;
var timeLeft = 60;
var timer;

function startTimer() {
  timeLeft -=1;
    timeDisplay.textContent = timeLeft + ' seconds remaining';
    if (timeLeft <= 0){
      stopQuiz();
    }
  }
function startQuiz() {
    playersScore = [];
    timer = setInterval(startTimer, 1000);
    allQuestions();
    }
function allQuestions() {
  var thisQuestion = myQuestions[currentQuestion];
  var htmlToAdd = [];

  htmlToAdd.push("<div>")
  htmlToAdd.push(`<h3>${thisQuestion.question}</h3>`);
  for (var i = 0; i < thisQuestion.answers.length; i++){
    console.log(thisQuestion.answers[i]);
    htmlToAdd.push(`<button class="possible-answer" onClick="handleUserAnswer(${i})">${thisQuestion.answers[i]}</ on>`);
  }
htmlToAdd.push("</div>");
if (currentQuestion == 0){
    console.log("htmlToAdd", htmlToAdd);
}


var htmlToDisplay = htmlToAdd.join("").trim();


if (currentQuestion == 0){
    console.log("htmlToDisplay (after join)", htmlToDisplay);
}

interfaceDisplay.innerHTML = htmlToDisplay;
}

function handleUserAnswer(userSelected){
var thisQuestion = myQuestions[currentQuestion];
if (thisQuestion.correct == userSelected){
  trueOrFalseDisplay.textContent = "Right!"    
} else {
    secondsRemaining -= 5;
    if (secondsRemaining < 0) {
        secondsRemaining = 0;
    }
    timeDisplay.textContent = secondsRemaining;
    trueOrFalseDisplay.textContent = "Wrong!"
}
trueOrFalseDisplay.setAttribute('class', 'feedback');
setTimeout(function(){
  trueOrFalseDisplay.setAttribute('class', 'feedback hide')
}, 1000);
currentQuestion+=1;
if (secondsRemaining <= 0 || currentQuestion == myQuestions.length){
    stopQuiz();
} else {

    allQuestions();
}

}

function stopQuiz(){

clearInterval(timer);

interfaceDisplay.innerHTML = "End of Quiz!";
}