const questions = [
    {
        question: "Who is the most Beautiful girl 😍 in the world?",
        answers: [
            {text: "Aisha", correct: false},
            {text: "Amina Faisal Muhammad", correct: true},
            {text: "Khadija", correct: false},
            {text: "Ummukulthum", correct: false},
        ]
    },
    {
        question: "Which is the naughtiest/troublemaker?",
        answers: [
            {text: "Amimi 💕", correct: true},
            {text: "Faisal 💙", correct: false},
        ]
    },
    {
        question: "Which is the calm/peacemaker?",
        answers: [
            {text: "Amimi 💕", correct: false},
            {text: "Faisal  💙", correct: true},
        ]
    },
    {
        question: "Who is the sexiest woman  🍒🍑 in the world?",
        answers: [
            {text: "Hadiza", correct: false},
            {text: "Humaira", correct: false},
            {text: "Zainab", correct: false},
            {text: "Amina", correct: true},
        ]
    },
    {
        question: "Who are you 🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️ from?",
        answers: [
            {text: "Faisal", correct: true},
        ]
    },
    {
        question: "Who do you want to spend the rest of your life with?💃💃",
        answers: [
            {text: "Faisal", correct: true},
        ]
    },
]

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    // get the first question
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    // update the question element with the question.
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });


}

function resetState() {
    nextButton.style.display = 'none';
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add('correct');
        score++
    } else {
        selectedBtn.classList.add('incorrect');
    }
    // convert each child of the answer button to a list
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ===  'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of
    ${questions.length}! ❤️❤️❤️😘😘😘💋💋💋`
    
    let img = document.createElement('img')
    img.src = 'faisal.jpeg'
    img.style.width = "100px";
    img.style.height= "100px";
    img.style.borderRadius = "4px";
    questionElement.appendChild(img)
    
    let audio = document.createElement('audio');
    audio.controls = 'autoplay';
    audio.src = 'habibi.mp3';
    audio.type = 'audio/mpeg';
    audio.autoplay = true;
    questionElement.appendChild(audio)
    

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz() 