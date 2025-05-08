import React from 'react';
import '../styles/components/DayTab.css';

function DayTab({ day, isActive, onClick }) {
  return (
    <div 
      className={`day-tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {day.label}
    </div>
  );
}

export default DayTab;