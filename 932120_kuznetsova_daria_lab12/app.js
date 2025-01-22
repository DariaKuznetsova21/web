const express = require('express');

const app = express();

app.use(express.json());

function calculate(first, second, operator) {
    let result = first + ' ' + operator + ' ' + second + ' = '; 

    if (operator == '/' && second == 0) {
        return { result: result + 'Division by 0' };
    } else if (operator == '/') {
        return { result: result.concat(+first / +second)};
    } else if (operator == '+') {
        return { result: result.concat(+first + +second) };
    } else if (operator == '-') {
        return { result: result.concat(+first - +second) };
    } else if (operator == '*') {
        return { result: result.concat(+first * +second) };
    }
}

app.post('/calc', (req, res) => {
    let { first, second, operator } = req.body;
    res.json(calculate(first, second, operator));
});

app.use(express.static('public'))
app.use('/Calc', express.static('public', {extensions: ['html']}))

app.listen(5000, () => console.log('listening on port 5000'));