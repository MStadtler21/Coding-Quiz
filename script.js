(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          
          const answers = [];
  
          
          for(letter in currentQuestion.answers){
  
            
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      
      let numCorrect = 0;
  
      
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        
        if(userAnswer === currentQuestion.correctAnswer){
         
          numCorrect++;
  
         
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        
        else{
          
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What company is responsible for the release of JavaScript?",
        answers: {
          a: "NetGear",
          b: "NetFlix",
          c: "NetScape"
        },
        correctAnswer: "c"
      },
      {
        question: "What is term concatenation?",
        answers: {
          a: "A method used to join two or more cats",
          b: "A method used to join two or more strings",
          c: "A method used to join two or more arrays"
        },
        correctAnswer: "b"
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
          a: "style",
          b: "body",
          c: "head",
          d: "script"
        },
        correctAnswer: "d"
      }
    ];
  
    
    buildQuiz();
  
    
    submitButton.addEventListener('click', showResults);
  })();