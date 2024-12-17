const quizData = [
    {
        question: "Who is known as the Iron Man of India?",
        a: "Lal Bahadur Shastri",
        b: "Sardar Vallabhbhai Patel",
        c: "Mahatma Gandhi",
        d: "Chandra Shekhar Azad",
        correct: "b",
    },
    {
        question: "Who is the chief architect of the Indian Constitution?",
        a: "APJ Abdul Kalam",
        b: "Jawaharlal Nehru",
        c: "Sardar Vallabhbhai Patel",
        d: "Bhimrao Ambedkar",
        correct: "d",
    },
    {
        question: "Who is the first woman Prime Minister of India?",
        a: "Annie Besant",
        b: "Sarojini Naidu",
        c: "Indira Gandhi",
        d: "Sucheta Kriplani",
        correct: "c",
    },
    {
        question: "Who wrote Vande Mataram?",
        a: "Bankim Chandra Chattopadhyay",
        b: "Mahatama Gandhi",
        c: "Rabindranath Tagore",
        d: "Sharat Chandra Chattopadhyay",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let cQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const cQuizData = quizData[cQuiz]

    question.innerText = cQuizData.question
    a_text.innerText = cQuizData.a
    b_text.innerText = cQuizData.b
    c_text.innerText = cQuizData.c
    d_text.innerText = cQuizData.d
}

function deselectAnswers() {
    answers.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answers.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[cQuiz].correct) {
            score++
        }

        cQuiz++

        if(cQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})