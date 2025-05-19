app.use('/api/tasks', taskRoutes)
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo à API do TaskWeek!' });
  });

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Rotas para tarefas
router.get('/', taskController.getAllTasks);
router.get('/day/:day', taskController.getTasksByDay);
router.get('/:id', taskController.getTaskById);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.patch('/:id/toggle', taskController.toggleTaskStatus);

module.exports = router;