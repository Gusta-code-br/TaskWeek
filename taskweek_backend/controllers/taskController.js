const Task = require('../models/Task');

// Buscar todas as tarefas
const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      order: [['created_at', 'DESC']]
    });
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// Buscar tarefas por dia da semana
const getTasksByDay = async (req, res, next) => {
  try {
    const { day } = req.params;
    
    if (!['SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO', 'DOMINGO'].includes(day)) {
      return res.status(400).json({ error: 'Dia da semana inválido' });
    }
    
    const tasks = await Task.findAll({
      where: { day },
      order: [['created_at', 'DESC']]
    });
    
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// Buscar tarefa por ID
const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    
    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// Criar uma nova tarefa
const createTask = async (req, res, next) => {
  try {
    const { title, description, day } = req.body;
    
    if (!title || !day) {
      return res.status(400).json({ error: 'Título e dia da semana são obrigatórios' });
    }
    
    const newTask = await Task.create({
      title,
      description: description || '',
      day,
      completed: false
    });
    
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

// Atualizar uma tarefa existente
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, day, completed } = req.body;
    
    const task = await Task.findByPk(id);
    
    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    
    // Validar que o título não está vazio
    if (title === '') {
      return res.status(400).json({ error: 'O título não pode estar vazio' });
    }
    
    // Atualizar apenas os campos fornecidos
    const updatedTask = await task.update({
      title: title !== undefined ? title : task.title,
      description: description !== undefined ? description : task.description,
      day: day !== undefined ? day : task.day,
      completed: completed !== undefined ? completed : task.completed
    });
    
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);
      
      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }
      
      await task.destroy();
      res.status(200).json({ message: 'Tarefa excluída com sucesso' });
    } catch (error) {
      next(error);
    }
  };
  
  // Marcar tarefa como concluída ou pendente (toggle)
  const toggleTaskStatus = async (req, res, next) => {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);
      
      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }
      
      const updatedTask = await task.update({
        completed: !task.completed
      });
      
      res.status(200).json(updatedTask);
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = {
    getAllTasks,
    getTasksByDay,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskStatus
  };