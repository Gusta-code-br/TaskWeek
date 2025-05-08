import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import '../styles/components/TaskItem.css';

function TaskItem({ task, onEdit }) {
  const { toggleTaskStatus, removeTask } = useTaskContext();

  const handleToggleStatus = () => {
    toggleTaskStatus(task.id);
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      removeTask(task.id);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleStatus}
        />
      </div>
      <div className="task-content" onClick={onEdit}>
        <h3 className="task-title">{task.title}</h3>
        <p className="task-description">{task.description}</p>
      </div>
    </div>
  );
}

export default TaskItem;