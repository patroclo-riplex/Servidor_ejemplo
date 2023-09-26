// list-edit-router.js

const express = require('express');
const router = express.Router();
const tasks = require('./task');  // Importa el módulo tasks

router.post('/create', (req, res) => {
  const newTask = req.body;
  tasks.addTask(newTask);
  res.json({ message: 'Tarea creada exitosamente', task: newTask });
});

router.delete('/delete/:id', (req, res) => {
  const taskId = req.params.id;
  tasks.deleteTask(taskId);
  res.json({ message: 'Tarea eliminada exitosamente' });
});

router.put('/update/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  tasks.updateTask(taskId, updatedTask);
  res.json({ message: 'Tarea actualizada exitosamente', task: updatedTask });
});

module.exports = router;
