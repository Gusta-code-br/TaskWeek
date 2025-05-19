import { render, screen, fireEvent } from '@testing-library/react';
import WeekView from './WeekView';

// Mock do componente TaskList para evitar dependências desnecessárias
jest.mock('./TaskList', () => {
  return function MockTaskList() {
    return <div data-testid="task-list"></div>;
  };
});

// Mock do componente DayTab para simplificar os testes
jest.mock('./DayTab', () => {
  return function MockDayTab({ day, onClick }) {
    return (
      <div 
        data-testid={`day-tab-${day.id}`} 
        onClick={() => onClick()}
      >
        {day.label}
      </div>
    );
  };
});

describe('WeekView Component', () => {
  const mockOnAddTask = jest.fn();
  const mockOnEditTask = jest.fn();
  const mockOnDayChange = jest.fn();
  
  beforeEach(() => {
    // Limpar os mocks antes de cada teste
    jest.clearAllMocks();
  });

  test('should render days of week', () => {
    render(
      <WeekView
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDayChange={mockOnDayChange}
        currentDay="SEGUNDA"
      />
    );
    
    expect(screen.getByText('SEG')).toBeInTheDocument();
    expect(screen.getByText('TER')).toBeInTheDocument();
    expect(screen.getByText('QUA')).toBeInTheDocument();
    expect(screen.getByText('QUI')).toBeInTheDocument();
    expect(screen.getByText('SEX')).toBeInTheDocument();
    expect(screen.getByText('SAB')).toBeInTheDocument();
    expect(screen.getByText('DOM')).toBeInTheDocument();
  });

  test('should call onAddTask when add button is clicked', () => {
    render(
      <WeekView
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDayChange={mockOnDayChange}
        currentDay="SEGUNDA"
      />
    );
    
    // Encontra o botão pela classe 'add-button'
    const addButton = document.querySelector('.add-button');
    fireEvent.click(addButton);
    
    expect(mockOnAddTask).toHaveBeenCalledTimes(1);
  });

  test('should call onDayChange when a day tab is clicked', () => {
    render(
      <WeekView
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDayChange={mockOnDayChange}
        currentDay="SEGUNDA"
      />
    );
    
    // Clique no dia "TER"
    const tuesdayTab = screen.getByText('TER');
    fireEvent.click(tuesdayTab);
    
    expect(mockOnDayChange).toHaveBeenCalledWith('TERCA');
  });
});