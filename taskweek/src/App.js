import React, { useState } from 'react';
import Header from './components/Header';
import WeekView from './components/WeekView';
import TaskForm from './components/TaskForm';

function App() {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [currentDay, setCurrentDay] = useState('SEGUNDA');
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = () => {
    setShowTaskForm(true);
    setEditingTask(null);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowTaskForm(true);
  };

  const handleCloseForm = () => {
    setShowTaskForm(false);
    setEditingTask(null);
  };

  return (
    <div className="app">
      {showTaskForm ? (
        <TaskForm 
          onClose={handleCloseForm} 
          task={editingTask} 
          day={currentDay}
        />
      ) : (
        <>
          <Header />
          <WeekView 
            onAddTask={handleAddTask} 
            onEditTask={handleEditTask}
            onDayChange={setCurrentDay}
            currentDay={currentDay}
          />
        </>
      )}
    </div>
  );
}

export default App; 