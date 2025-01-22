let index = 0;
let questions = [];
let answers = [];

const form = document.getElementById('form');
const next = document.getElementById('next');
const input = document.getElementById('answer');

document.addEventListener('DOMContentLoaded', () => {
    newQuestion();
})

document.addEventListener('submit', (evt) => {
    evt.stopPropagation();
    evt.preventDefault();

    handleSubmit();
});

next.addEventListener('click', evt => {
    evt.preventDefault();
    evt.stopPropagation();

    newQuestion();
})

function random() {
    return Math.round(Math.random() * 9) + 1;
}

function randomOperator() {
    let num = Math.round(Math.random() * 100);
    return num % 2 == 0 ? '+' : num % 3 == 0 ? '-' : '*';
}

function newQuestion() {
    const first = random();
    const second = random();
    const operator = randomOperator();

    let question = `${first} ${operator} ${second} = `;

    if (index > 0) {
        answers.push(input.value);
        input.value = '';
        questions
    }
    questions.push(question);
    index = index + 1;

    const el = document.getElementById('question');
    el.innerText = question;
}

async function handleSubmit() {
    if (document.getElementById('answer').value.length > 0) {
        newQuestion();
    }

    form.remove();

    let result = await fetch('/answer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            questions,
            answers
        })
    });

    result = await result.json();

    const header = document.getElementById('header');
    header.innerText = 'Quiz results'; 
    
    const quizResult = document.getElementById('result');
    quizResult.innerHTML = '';
    const text = document.createElement('h2');

    text.innerText = `Right answers ${result.correctAnswers} out ${result.totalAnswers}`;
    quizResult.appendChild(text);

    for (let index in answers) {
        let str = +index + 1 + '. ' + questions[index] + answers[index];
        let answer = document.createElement('span');
        answer.innerText = str;
        quizResult.appendChild(answer);
    }
}