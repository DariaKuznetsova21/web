const first = document.getElementById('first')
const second = document.getElementById('second')
const operator = document.getElementById('operator')
const resultNode = document.getElementById('result')

const form = document.getElementById('calc');

document.addEventListener('submit', (event) => {
    event.stopPropagation();
    event.preventDefault();

    handleSubmit();
});

async function handleSubmit() {
    if (isNaN(first.value) || isNaN(second.value)) {
        return;
    }

    let data = {
        first: first.value,
        second: second.value,
        operator: operator.value
    };

    let result = await fetch('/calc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })

    result = (await result.json()).result;

    const header = document.createElement('h1');
    header.textContent = 'Result';

    const text = document.createElement('span');
    text.innerText = result;

    resultNode.appendChild(header);
    resultNode.appendChild(text);
    form.remove();
}