import { render, screen } from '@testing-library/react';
import App from './App';
import { TaskProvider } from './context/TaskContext';
import * as apiService from './services/api';

// Mock das funções da API
jest.mock('./services/api', () => ({
  getTasks: jest.fn(),
  createTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn()
}));

test('renders app correctly', () => {
  // Configurando os mocks
  apiService.getTasks.mockResolvedValue([]);
  
  render(
    <TaskProvider>
      <App />
    </TaskProvider>
  );
  
  // Verificando se o título principal está presente
  //const titleElement = screen.getByText(/Bem vindo ao seu sistema de controle de atividades! Task Week!/i);
  //expect(titleElement).toBeInTheDocument();
  
  // Verificando se a sidebar contém "TaskWeek"
  const sidebarTitle = screen.getByText("TaskWeek");
  expect(sidebarTitle).toBeInTheDocument();
  
  // Verificando se os dias da semana estão presentes
  expect(screen.getByText("SEG")).toBeInTheDocument();
  expect(screen.getByText("TER")).toBeInTheDocument();
  
  // Verificando se o conteúdo do dia atual (SEGUNDA) está presente
  expect(screen.getByText("SEGUNDA")).toBeInTheDocument();
  
  // Verificando se o botão de adicionar está presente
  const addButton = screen.getByText(/Adicionar/);
  expect(addButton).toBeInTheDocument();
  
  // Verificando se mostra mensagem de lista vazia
  //expect(screen.getByText("Nenhuma tarefa para este dia")).toBeInTheDocument();
});