import React, { createContext, useState, useEffect, useContext } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

const TaskContext = createContext();

export function useTaskContext() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar tarefas');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      setLoading(true);
      const newTask = await createTask(taskData);
      setTasks([...tasks, newTask]);
      return newTask;
    } catch (err) {
      setError('Erro ao adicionar tarefa');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const editTask = async (id, taskData) => {
    try {
      setLoading(true);
      const updatedTask = await updateTask(id, taskData);
      setTasks(tasks.map(task => task.id === id ? updatedTask : task));
      return updatedTask;
    } catch (err) {
      setError('Erro ao editar tarefa');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const removeTask = async (id) => {
    try {
      setLoading(true);
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Erro ao excluir tarefa');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const toggleTaskStatus = async (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      try {
        const updatedTask = await updateTask(id, {
          ...task,
          completed: !task.completed
        });
        setTasks(tasks.map(t => t.id === id ? updatedTask : t));
      } catch (err) {
        setError('Erro ao atualizar status da tarefa');
        console.error(err);
        throw err;
      }
    }
  };

  const getTasksByDay = (day) => {
    return tasks.filter(task => task.day === day);
  };

  const value = {
    tasks,
    loading,
    error,
    addTask,
    editTask,
    removeTask,
    toggleTaskStatus,
    getTasksByDay,
    refreshTasks: fetchTasks,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}