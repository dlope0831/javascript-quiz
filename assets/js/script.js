var timeDisplay = document.getElementById("timer");
var interfaceDisplay = document.getElementById ("interface");
var trueOrFalseDisplay = document.getElementById("right-or-wrong");
var startButton = document.getElementById("start-button");

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
    startButton.classList.add("hidden");
    timer = setInterval(startTimer, 1000);
    allQuestions();
    }
function allQuestions() {
  var thisQuestion = myQuestions[currentQuestion];
  var replacement = `
  <div>
    <h3>${thisQuestion.question}</h3>
    <button class="possible-answer" onClick="handleUserAnswer(0)">${thisQuestion.answers[0]}</ button>
    <button class="possible-answer" onClick="handleUserAnswer(1)">${thisQuestion.answers[1]}</ button>
    <button class="possible-answer" onClick="handleUserAnswer(2)">${thisQuestion.answers[2]}</ button>
    <button class="possible-answer" onClick="handleUserAnswer(3)">${thisQuestion.answers[3]}</ button>
  </div>`

interfaceDisplay.innerHTML = replacement;
}

function handleUserAnswer(userSelected){
var thisQuestion = myQuestions[currentQuestion];
if (thisQuestion.correct == userSelected){
  trueOrFalseDisplay.textContent = "Right!"    
} else {
    timeLeft -= 5;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    timeDisplay.textContent = timeLeft;
    trueOrFalseDisplay.textContent = "Wrong!"
}
trueOrFalseDisplay.setAttribute('class', 'feedback');
setTimeout(function(){
  trueOrFalseDisplay.setAttribute('class', 'feedback hide')
}, 1000);
currentQuestion+=1;
if (timeLeft <= 0 || currentQuestion == myQuestions.length){
    stopQuiz();
} else {

    allQuestions();
}

}

function stopQuiz(){

clearInterval(timer);

interfaceDisplay.innerHTML = `<div> End of Quiz!<br> <input type = "text" id="userInfo"> <br><button onClick= "saveScore()">Submit</button></div>`;
}
function saveScore(){
  var userInfo = document.getElementById("userInfo").value
  console.log(userInfo)
  var currentScore = JSON.parse(localStorage.getItem("playersScore")) || [];
  console.log(currentScore)
  currentScore.push({
    name: userInfo,
    score: timeLeft,
  })
  localStorage.setItem("playersScore", JSON.stringify(currentScore));
}
