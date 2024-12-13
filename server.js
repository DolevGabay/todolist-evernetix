const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let todos = [
    { id: 1, text: 'Complete project proposal', completed: true, category: 'work' },
    { id: 2, text: 'Buy groceries for the week', completed: false, category: 'personal' },
    { id: 3, text: 'Prepare presentation slides', completed: true, category: 'work' },
    { id: 4, text: 'Call the insurance company', completed: false, category: 'personal' },
    { id: 5, text: 'Plan family dinner', completed: false, category: 'personal' },
];


let categories = ['work', 'personal', 'Uncategorized'];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const { text, category } = req.body;
    if (!text) return res.status(400).json({ message: 'Text is required' });
    const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        category,
    };
    todos.push(newTodo);
    res.json(newTodo);
});

app.patch('/todos/:id', (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const { text, completed } = req.body;
    const todo = todos.find(todo => todo.id == id);
    if (text) todo.text = text;
    if (completed !== undefined) todo.completed = completed;
    res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id != id);
    res.json({ id });
});

app.get('/categories', (req, res) => {
    res.json(categories);
});

app.post('/categories', (req, res) => {
    const body = req.body;
    console.log(body.name);
    const category = body.name;
    if (!category) return res.status(400).json({ message: 'Category is required' });
    categories.push(category);
    res.json(category);
});

// Start server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
