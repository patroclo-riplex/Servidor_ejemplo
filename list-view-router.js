// list-view-router.js

const express = require('express');
const router = express.Router();
const tasks = require('./task');  // Importa el módulo tasks

router.get('/', (req, res) => {
  const allTasks = tasks.getTasks();
  res.json(allTasks);
});

router.get('/completed', (req, res) => {
    const completedTasks = tasks.getCompletedTasks();
  res.json(completedTasks);
});

router.get('/incomplete', (req, res) => {
    const incompleteTasks = tasks.getIncompleteTasks();
  res.json(incompleteTasks);
});


module.exports = router;
