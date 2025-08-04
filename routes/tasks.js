const express = require('express');
const router = express.Router();

let tasks = [];

function simulateReminder(task) {
  console.log(`🔔 Simulated alert for task: "${task.text}"`);
  console.log(`📧 Email: ${task.email}`);
  console.log(`📱 Phone: ${task.phone}`);
}

router.get('/', (req, res) => {
  const filter = req.query.filter || 'all';
  const now = new Date();

  tasks.forEach(task => {
    task.remaining = Math.max(0, new Date(task.deadline) - now);
    task.overdue = task.remaining <= 0 && !task.done;
    if (task.overdue && !task.notified) {
      simulateReminder(task);
      task.notified = true;
    }
  });

  let filteredTasks = tasks;
  if (filter === 'completed') filteredTasks = tasks.filter(t => t.done);
  else if (filter === 'pending') filteredTasks = tasks.filter(t => !t.done);

  res.render('index', { tasks: filteredTasks, filter });
});

router.post('/add', (req, res) => {
  const { task, deadline, priority, email, phone } = req.body;
  const newTask = {
    id: Date.now(),
    text: task,
    deadline,
    priority,
    email,
    phone,
    done: false,
    notified: false,
    overdue: false
  };
  tasks.push(newTask);
  res.redirect('/');
});

router.post('/toggle/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (task) {
    task.done = !task.done;
    task.notified = false;
    task.overdue = false;
  }
  res.redirect('/');
});

router.post('/delete/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.redirect('/');
});

module.exports = router;
