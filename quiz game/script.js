// *************************************** QUESTION ***********************************************

const questions = [{
  question: "What does the 'DOM' stand for in web development?",
  options: ["Data Object Model", "Document Object Model", "Data-Oriented Model", "Document-Oriented Model"],
  answer: 1
},
{
  question: "Which HTTP method is used to update a resource?",
  options: ["GET", "POST", "PUT", "DELETE"],
  answer: 2
},
{
  question: "In JavaScript, what will 'typeof null' return?",
  options: ["'null'", "'undefined'", "'object'", "'boolean'"],
  answer: 2
},
{
  question: "Which CSS property is used to change the text color of an element?",
  options: ["font-color", "text-color", "color", "background-color"],
  answer: 2
},
{
  question: "Which HTML5 element is used to define navigation links?",
  options: [" nav ", " section ", " article ", " header "],
  answer: 0
},
{
  question: "In CSS, how do you select elements with the class 'header'?",
  options: [".header", "#header", "*header", "header"],
  answer: 0
},
{
  question: "What is the default value of the 'position' property in CSS?",
  options: ["absolute", "fixed", "relative", "static"],
  answer: 3
},
{
  question: "Which JavaScript function is used to parse a JSON string into a JavaScript object?",
  options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.convert()"],
  answer: 1
},
{
  question: "In HTML5, which attribute is used to specify that an input field must be filled out?",
  options: ["required", "validate", "mandatory", "fill"],
  answer: 0
},
{
  question: "Which of the following is a CSS grid property?",
  options: ["grid-template-rows", "flex-wrap", "align-content", "position"],
  answer: 0
}]

// ************************************* CODE *****************************************************

const Qname = document.getElementById("QText")
const choices = document.getElementById("allOptions")
const next = document.getElementById("next")
const result = document.getElementById("result")
// let startBox = document.getElementsByClassName("startBox")
// let mainBox = document.getElementsByClassName("container")
let startBtn = document.getElementById("start")

let currentindex = 0;
let score = 0

function loadQuiz() {
  const currentQuestion = questions[currentindex]
  // Display the question text
  Qname.textContent = currentQuestion.question;

  choices.innerHTML = '';//clear previous choice

  //display options
  currentQuestion.options.forEach((choice, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="radio" name="choice" value="${i}" id="choice${i}">
      <label for="choice${i}">${choice}</label>`;

    choices.appendChild(li);
  });

}

function submitAnswer() {
  const selectedChoice = document.querySelector('input[name="choice"]:checked');

  if (selectedChoice) {

    const Ans = parseInt(selectedChoice.value)

    //check yhe answer
    if (Ans === questions[currentindex].answer) {
      score++;
    }

    currentindex++;//move to next question

    if (currentindex < questions.length) {
      loadQuiz(); // Load the next question
    } else {
      // No more questions, show the final score
      showScore();
    }
  }
  else {
    alert("Please select an answer before Going next.");
  }
}

function showScore() {
  Qname.textContent = "Quiz Completed!";
  choices.innerHTML = ''; // Clear the choices
  next.style.display = 'none'; // Hide the submit button
  result.textContent = `Your final score is: ${score} out of ${questions.length}`;
}

startBtn.addEventListener("click", ()=> {
  document.querySelector(".startBox").style.display='none'
  document.querySelector(".container").style.display = 'block'
})

loadQuiz();