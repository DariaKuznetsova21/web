function add() {
    const parent = document.getElementById('elements');

    const element = document.createElement('div');
    element.className = 'line';
    
    const elementId = Date.now().toString() + (Math.floor(Math.random() * 1000)).toString();
    element.id = elementId;
    
    element.appendChild(document.createElement('input'));
    element.appendChild(document.createElement('input'));

    const up = document.createElement('button');
    const down = document.createElement('button');
    const deleteButton = document.createElement('button');

    up.innerText = '↑';
    up.onclick = function () {
        const el = this.parentElement.previousElementSibling;
        console.log(el);
        if (el) {
            this.parentElement.after(el);
        }
    }
    
    down.innerText = '↓'
    down.onclick = function () {
        const el = this.parentElement.nextElementSibling;
        console.log(el);
        if (el) {
            this.parentElement.before(el);
        }
    }

    deleteButton.innerText = 'x';
    deleteButton.onclick = function () {
        this.parentElement.remove();
    }

    element.appendChild(up);
    element.appendChild(down);
    element.appendChild(deleteButton);

    parent.appendChild(element);
}

function createObject() {
    const elements = document.getElementsByClassName('line'); 
    let array = Array.from(elements);

    if (array.length == 0) {
        return undefined;
    }

    let obj = {};

    for (let element of array) {
        let children = element.children;
        let firstValue = children[0].value;
        let secondValue = children[1].value;
        obj[firstValue] = secondValue;
    }

    return obj;
}

function save() {
    const parent = document.getElementById('save-output');

    parent.innerHTML = '';

    let obj = createObject();

    if (obj == undefined) {
        return;
    }

    const child = document.createElement('p');
    child.innerText = JSON.stringify(obj);

    parent.appendChild(child);
}