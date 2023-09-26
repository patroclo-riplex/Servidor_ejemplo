// tasks.js

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
  
  function getTasks() {
    return tasks;
  }
  
  function getCompletedTasks() {
    return tasks.filter(task => task.isCompleted);
  }
  
  function getIncompleteTasks() {
    return tasks.filter(task => !task.isCompleted);
  }
  
  function addTask(newTask) {
    tasks.push(newTask);
  }
  
  function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
    }
  }
  
  function updateTask(taskId, updatedTask) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
    }
  }
  
  module.exports = {
    getTasks,
    getCompletedTasks,
    getIncompleteTasks,
    addTask,
    deleteTask,
    updateTask
  };
  