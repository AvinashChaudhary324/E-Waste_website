const quizDB = [
  {
  question: "Q1) What is e-waste?" ,
  a: "Electronic Waste",
  b: "Environmental Waste",
  c: "Earth Waste",
  d: "Energy Waste",
  ans: "ans1",
},

{
  question: "Q2) According report, how much million tonnes e-waste is generated every year?" ,
  a: "25",
  b: "50",
  c: "75",
  d: "100",
  ans: "ans2",
},

{
  question: "Q3) What country produces the most e-waste?" ,
  a: "India",
  b: "China",
  c: "USA",
  d: "Russia",
  ans: "ans2",
},

{
  question: "Q4) According to the UN, what percent of total global e-waste is recycled?",
  a: "0%-5%",
  b: "5%-10%",
  c: "10%-15%",
  d: "15%-20%",
  ans: "ans4",
},


{
  question: "Q5) Which toxic compound is not found in e-waste?",
  a: "Mercury",
  b: "Cadmium",
  c: "Neon",
  d: "Lead",
  ans: "ans4",
}
];

const question = document.querySelector('.question');
const opt1 = document.querySelector('#opt1');
const opt2 = document.querySelector('#opt2');
const opt3 = document.querySelector('#opt3');
const opt4 = document.querySelector('#opt4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const scores = document.querySelector('#scores');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
 question.innerText = questionList.question;
 opt1.innerText = questionList.a;
 opt2.innerText = questionList.b;
 opt3.innerText = questionList.c;
 opt4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deSelectAll = () => {
answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
 const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  
  if (checkedAnswer == quizDB[questionCount].ans) {
    score++;
  };
  
  questionCount++;
  deSelectAll();
  
  if (questionCount < quizDB.length) {
    loadQuestion();
  }
  
     else {
       scores.innerHTML = `
       <h3> You Scored ${score}/${quizDB.length} </h3>
       <button class="btn" onclick="location.reload()">Restart</button>
       <button class="btn" onclick="history.back()">Home</button>
        `;
       scores.classList.remove('points');
     }
});
