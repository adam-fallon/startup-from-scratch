const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const port = 3000;

const todos = [];

app.get('/todos', (req, res) => {
    res.status(200).json({
        'todos': todos
    })
});

app.post('/todos', (req, res) => {
    const todo = req.body.todo;
    todos.push(todo);
    res.status(200).json({
        'todos': todos
    })
});

app.listen(port, () => console.log(`Server started on port: ${port}`));