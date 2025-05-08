import React, { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import '../styles/components/TaskForm.css';

function TaskForm({ onClose, task, day }) {
  const { addTask, editTask } = useTaskContext();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    day: day
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        day: task.day
      });
    } else {
      setFormData({
        title: '',
        description: '',
        day: day
      });
    }
  }, [task, day]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpa o erro quando o campo é preenchido
    if (errors[name] && value.trim()) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'O título é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    try {
      if (task) {
        await editTask(task.id, formData);
      } else {
        await addTask(formData);
      }
      onClose();
    } catch (error) {
      console.error('Erro ao salvar tarefa:', error);
    }
  };

  return (
    <div className="task-form-container">
      <div className="task-form-header">
        <button className="back-button" onClick={onClose}>
          ←
        </button>
        <h2>{task ? 'Editando Tarefa' : 'Criando Nova Tarefa'}</h2>
      </div>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
          />
        </div>
        
        <div className="form-actions">
          {task && (
            <button 
              type="button" 
              className="delete-button"
              onClick={() => onClose()}
            >
              Excluir
            </button>
          )}
          <button 
            type="button" 
            className="edit-button"
            onClick={() => onClose()}
          >
            Editar
          </button>
          <button type="submit" className="save-button">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}


export default TaskForm;