const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language"
        ],
        correct:0,
    },
    {
        question:
         "WHich CSS property is used to control the spacing between elements?",
         options:["Margin" ,"Padding" ,"Border-Spacing" ,"Margin"], 
         correct:1,
    },
    {
       question:
        "What is the Javascript function used to select an HTML element by its id?",
        options:[
            "document.query",
            "getElementById",
            "selectElement",
            "findElementById"
        ],
        correct:1, 
    },
    {
        question:
        "Which HTML tag is used to create an ordered list?",
        options: ["<ul>" ,"<li>" ,"<ol>" ,"<dl>"],
        correct:2,
    },
];

const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
  );
  const  submitBnt = document.querySelector("#submit");

  let currentQuiz = 0;
  let score = 0;


  const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(options);




    questionElm.innerText = `${currentQuiz +1}:${question}`;




options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
);
  };

  loadQuiz();

 const getSelectedOption = () => {
    let ans_index;
    answerElm.forEach((curOption, index) => {
        if (curOption.checked) {
            ans_index = index;
        }
    });
    return ans_index;
 };
 

const deselectedAnswers = () => {
    return answerElm.forEach(( curElem) => curElem.checked = false);
};





 submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if (selectedOptionIndex === quizData [currentQuiz].correct) {
        score = score + 1;
    }

   currentQuiz++;


   if(currentQuiz < quizData.length) {
    deselectedAnswers();
    loadQuiz();
   } else {
    quiz.innerHTML = `
    <div class="result">
    <h2> Your Score: ${score}/${quizData.length} Correct Answers</>
    <h3>Congratulations on completing the quiz </h3>
    <button class="reload-button" onclick="location.reload()">Play Again </button>
    </div>
    `;
   }

 });