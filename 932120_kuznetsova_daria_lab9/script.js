
let value = undefined;
let operation = undefined;
let prevValue = 0;
let performedOperation = false;

function displayNewValue() {
    let el = document.getElementById('output');
    el.innerHTML = '';

    const newValue = document.createElement('p');
    let text = value == undefined ? '' : value;        
    newValue.innerText = text;

    const lightPart = document.createElement('span');
    lightPart.style.opacity = 0.4;

    if (operation != undefined) {
        lightPart.innerText = prevValue + ' ' + operation + ' ';
    }

    el.appendChild(newValue);
    el.appendChild(lightPart);
}

function number(num) {
    if (value == undefined || performedOperation == true) {
        value = num;
        performedOperation = false;
    } else {
        value = value + num.toString();
    }
    displayNewValue();
}

function dot() {
    if (value.toString().includes('.')) {
        return
    }
    if (performedOperation == true) {
        performedOperation = false;
    }
    value = +value + '.';
    displayNewValue();
}

function swapValues() {
    prevValue = value;
    value = undefined;
}

function operator(op) { 
    if (value == undefined) {
        return;
    }

    swapValues();
    operation = op;
    displayNewValue();
}

function equal() {
    if (value == undefined || prevValue == undefined || operation == undefined) {
        return;
    }

    switch (operation) {
        case '+':
            value = +value + +prevValue;
            break;
    
        case '-':
            value = +prevValue - +value;
            break;
        
        case '/':
            if (value == 0) {
                value = 0;
            } else {
                value = +prevValue / +value;
            }
            break;
        
        case '*':
            value = +prevValue * +value;
            break;
        
        default:
            break;
    }

    operation = undefined;
    prevValue = undefined;
    performedOperation = true;
    displayNewValue();
}

function clearValue() {
    value = undefined;
    prevValue = 0;
    operation = undefined;
    displayNewValue();
}

function backspace() {
    if (value == undefined) {
        return;
    }

    value = value.toString().slice(0, -1);

    displayNewValue();
}
