const first = document.getElementById('first');
const second = document.getElementById('second');

const add = document.getElementById('add');
const sub = document.getElementById('sub');
const mult = document.getElementById('mult');
const div = document.getElementById('div');

async function getInfo() {
    let result = await fetch('/calc', {
        method: 'GET'
    })

    result = await result.json();

    first.innerHTML = result.first;
    second.innerHTML = result.second;

    add.innerText = result.add;
    sub.innerText = result.sub;
    mult.innerText = result.mult;
    div.innerText = result.div;
};

getInfo();