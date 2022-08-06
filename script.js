var timerEl = document.getElementById('timer');

var playersScore = [];
var questionEl = document.createElement("div");
questionEl.textContent = "What is JavaScript?";
questionEl.appendChild(listEl);

function generateQuiz() {
    playersScore = [];



}


startQuizBtn.addEventListener("click", startQuiz);


function countdown(event) {
    var timeLeft = 75;
    // event.preventDefault();
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } // TODO: Add comments describing the functionality of the `else if` statement:
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } // TODO: Add comments describing the functionality of the `else` statement:
    else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
countdown();