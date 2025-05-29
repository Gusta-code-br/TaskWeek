import React, { useState } from 'react';
import DayTab from './DayTab';
import TaskList from './TaskList';
import '../styles/components/WeekView.css';

const days = [
  { id: 'SEGUNDA', label: 'SEG' },
  { id: 'TERCA', label: 'TER' },
  { id: 'QUARTA', label: 'QUA' },
  { id: 'QUINTA', label: 'QUI' },
  { id: 'SEXTA', label: 'SEX' },
  { id: 'SABADO', label: 'SAB' },
  { id: 'DOMINGO', label: 'DOM' },
];

function WeekView({ onAddTask, onEditTask, onDayChange, currentDay }) {
  const handleDayClick = (day) => {
    onDayChange(day);
  };

  return (
    <div className="week-view">
      <div className="sidebar">
        <h1>TaskWeek</h1>
      </div>
      <div className="content">
        <div className="days-tabs">
          {days.map((day) => (
            <DayTab
              key={day.id}
              day={day}
              isActive={currentDay === day.id}
              onClick={() => handleDayClick(day.id)}
            />
          ))}
        </div>
        <div className="day-content">
          <div className="day-header">
            <h2>{currentDay}</h2>
            <button className="add-button" onClick={onAddTask}>
              Adicionar <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <TaskList day={currentDay} onEditTask={onEditTask} />
        </div>
      </div>
    </div>
  );
}

export default WeekView;