const express = require('express');

const app = express();

app.get('/calc', (req, res) => {
    let first = Math.round(Math.random() * 10);
    let second = Math.round(Math.random() * 10);

    let data = {first, second}

    data.add = first + ' + ' + second + ' = ' + (+first + +second);
    data.sub = first + ' - ' + second + ' = ' + (+first - +second);
    data.mult = first + ' * ' + second + ' = ' + (+first * +second);
    data.div = second == 0 ? 'Division by 0' : first + ' / ' + second + ' = ' + (+first / +second);

    res.json(data);
});

app.use(express.static('public'))
app.use('/CalcService', express.static('public', {extensions: ['html']}))

app.listen(5000, () => console.log('listening on port 5000'));