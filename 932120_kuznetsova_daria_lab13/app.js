const express = require('express');

const app = express();

app.use(express.json());

function result(questions, answers) {
    let data = {correctAnswers: 0, totalAnswers: 0};

    for (let index in answers) {
        let correctAnswer;
        let values = questions[index].split(' ');
        
        switch (values[1]) {
            case '+':
                correctAnswer = +values[0] + +values[2];
                break;
            case '-':
                correctAnswer = +values[0] - +values[2];
                break;
            case '*':
                correctAnswer = +values[0] * +values[2];
                break;        
            default:
                break;
        }

        if (correctAnswer == answers[index]) {
            data.correctAnswers += 1;
        }
        data.totalAnswers += 1;
    }
    
    return data;
}

app.post('/answer', (req, res) => {
    let { questions, answers } = req.body;
    res.json(result(questions, answers));
});

app.use(express.static('public'))
app.use('/Mockups', express.static('public', {extensions: ['html']}))

app.listen(5000, () => console.log('listening on port 5000'));