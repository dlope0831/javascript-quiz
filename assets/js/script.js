var timerEl = document.getElementById('timer');
var startQuizBtn = document.getElementById ('start-quiz');

var playersScore = [];
// var correctAnswers =["a","b","c","d"];
// var myQuestions =[""];

function startQuiz() {
    playersScore = [];
    
    }
function allQuestions() {

}

function allAnswers () {

}
startQuizBtn.addEventListener("click", startQuiz);


function countdown(event) {
    var timeLeft = 75;
    // event.preventDefault();
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    }
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } 
    else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
countdown();
