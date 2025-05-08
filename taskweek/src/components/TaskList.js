import React from 'react';
import TaskItem from './TaskItem';
import { useTaskContext } from '../context/TaskContext';
import '../styles/components/TaskList.css';

function TaskList({ day, onEditTask }) {
  const { getTasksByDay, loading } = useTaskContext();
  
  const tasks = getTasksByDay(day);

  if (loading) {
    return <div className="loading">Carregando tarefas...</div>;
  }

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <div className="empty-list">Nenhuma tarefa para este dia</div>
      ) : (
        tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onEdit={() => onEditTask(task)} 
          />
        ))
      )}
    </div>
  );
}

export default TaskList;    