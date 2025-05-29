import axios from 'axios';

const API_URL = 'https://task-week-backend.vercel.app';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTasks = async () => {
  try {
    const response = await api.get('/api/tasks');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    // Dados mocados para desenvolvimento sem backend
    return [
      { id: 1, title: 'Reunião com cliente', description: 'Discutir novos requisitos', day: 'SEGUNDA', completed: false },
      { id: 2, title: 'Estudar React', description: 'Hooks e Context API', day: 'SEGUNDA', completed: true },
      { id: 3, title: 'Academia', description: 'Treino de pernas', day: 'TERCA', completed: false },
      { id: 4, title: 'Médico', description: 'Consulta às 15h', day: 'QUARTA', completed: false },
      { id: 5, title: 'Projeto TaskWeek', description: 'Finalizar componentes', day: 'QUINTA', completed: false },
      { id: 6, title: 'Revisão de código', description: 'Revisar PRs pendentes', day: 'SEXTA', completed: false },
      { id: 7, title: 'Almoço em família', description: 'Casa da vó', day: 'SABADO', completed: false },
      { id: 8, title: 'Descanso', description: 'Dia livre', day: 'DOMINGO', completed: false },
    ];
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await api.post('/tasks', taskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    // Simulação para desenvolvimento local
    return {
      id: Date.now(),
      ...taskData,
      completed: false
    };
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await api.put(`/tasks/${id}`, taskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    // Simulação para desenvolvimento local
    return {
      id,
      ...taskData
    };
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
    // Simulação para desenvolvimento local
    return { success: true };
  }
};