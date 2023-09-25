const express = require('express');
const app = express();
const PORT = 3000;

const tasks = [
  {
    id: '123',
    isCompleted: false,
    description: 'Walk the dog'
  },
  {
    id: '456',
    isCompleted: true,
    description: 'Eating the food'
  },
  {
    id: '789',
    isCompleted: false,
    description: 'Sleeping in the house'
  }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
