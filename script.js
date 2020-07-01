const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

function buildQuiz(){

const output = [];

myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        const answers =[];
        for(letter in currentQuestion.answers) {
          answers.push(
              `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}"></input>
              </label>`
          );  
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
        );
        }
    )
    quizContainer.innerHTML = output.join("");
}