const close = document.getElementById("close-btn");
const popup = document.getElementById('popup1')

close.addEventListener('click', function() {
    btnClose()
})

function btnClose() {
    popup.style.display = 'none';
}


// Lock screen script
const lockScreen = document.getElementById("lock-screen");
const start = document.getElementById("info");
const passwordInput = document.getElementById("password-input");

document.getElementById("unlock-btn").addEventListener("click", checkPassword);

function checkPassword() {
    const enteredPassword = passwordInput.value;
    // You can change the password as needed
    const correctPassword = "PramtiWSC";

    if (enteredPassword === correctPassword) {
        lockScreen.style.display = "none";
        start.style.display = "block";
        popup.style.visibility = "visible";
    } else {
        alert("Incorrect password. Try again.");
    }
}

// Event listener for "Mulai" button
document.getElementById("mulai").addEventListener("click", function () {
    const enteredPassword = passwordInput.value;
    // You can change the password as needed
    const correctPassword = "PramtiWSC";

    if (enteredPassword === correctPassword) {
        lockScreen.style.display = "none";
        start.style.display = "none"; // Hide the "info" div
        document.getElementById("app").style.display = "block"; // Show the "app" div

        // Start quiz or timer as needed
        initializeQuiz();
    } else {
        alert("Incorrect password. Try again.");
    }
});

function initializeQuiz() {
    startTimer();
    startQuiz(questTotal);
}

// ... (rest of your script)



//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


import questions from './questions.js';

const result = document.getElementById("result")
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const skipButton = document.getElementById("skip-btn");
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions;
let answered = false;
let timerDuration = 600; // 10 minutes in seconds
let questTotal = 25;
let startTime;
let timer;

function startQuiz(numberOfQuestions) {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    selectedQuestions = shuffledQuestions.slice(0, numberOfQuestions);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(selectedQuestions);
    startTime = Date.now(); // Record the start time
}

function showQuestion(questionsArray) {
    resetState();
    let currentQuestion = questionsArray[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Mengacak array jawaban
    const shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    answered = false;
    nextButton.disabled = true;
    skipButton.disabled = false;
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.disabled = false;
    skipButton.disabled = true
    answered = true;
}

function showScore(message) {
    resetState();
    const timeTaken = calculateTimeTaken();
    if (message) {
        result.innerHTML = `<br>${message}<br>Kamu Menjawab ${score} dari ${selectedQuestions.length} soal dalam waktu ${timeTaken}! <br>Silahkan refresh web untuk memulai lagi`;
    } else {
        result.innerHTML = `<br>${message}<br>Kamu Menjawab ${score} dari ${selectedQuestions.length} soal dalam waktu ${timeTaken}! <br>Silahkan refresh web untuk memulai lagi.`;
    }
    questionElement.style.display = "none";
    skipButton.style.display = "none";
    nextButton.style.display = "none";
}

function calculateTimeTaken() {
    const endTime = Date.now();
    const timeTakenInSeconds = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(timeTakenInSeconds / 60);
    const seconds = timeTakenInSeconds % 60;
    return `${minutes} menit ${seconds} detik`;
}

function skipQuestion() {
    resetState();
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.disabled = false;
    skipButton.disabled = true;
}

function startTimer() {
    timer = setInterval(function () {
        timerElement.innerHTML = formatTime(timerDuration);

        if (timerDuration === 0) {
            clearInterval(timer);
            showScore("Waktu kamu telah habis!");
        } else {
            timerDuration--;
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `Time Left: ${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

skipButton.addEventListener("click", skipQuestion);

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < selectedQuestions.length) {
        handleNextButton();
    } else {
        showScore();
    }
});

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion(selectedQuestions);
    } else {
        clearInterval(timer); // Stop the timer
        showScore("Selamat!, Kamu telah menjawab semua soal");
    }
}

// Example usage with 1 question and a timer of 6 minutes (360 seconds)
startQuiz(questTotal);
