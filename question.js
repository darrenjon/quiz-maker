const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'))

const MAX_QUESTIONS = 3;

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let acceptingAnswers = false;

let questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript??',
    choice1: '<script>',
    choice2: '<javascript>',
    choice3: '<js>',
    choice4: '<scripting>',
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  }
]

startQuiz = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion();
}

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the result page
    return window.location.assign("/result.html")
  }
  // change questions
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionIndex]
  question.innerText = currentQuestion.question

  // change choices
  choices.forEach((choice) => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  // remove question that already used
  availableQuestions.splice(questionIndex, 1)
  acceptingAnswers = true
}

choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false
    //display correct/incorrect answer
    const selectedAnswer = e.target.dataset["number"]
    const addChoiceClass = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

    e.target.parentElement.classList.add(addChoiceClass)
    setTimeout(() => {
      e.target.parentElement.classList.remove(addChoiceClass)
      getNewQuestion();
    }, 1000)
  })
})

startQuiz();