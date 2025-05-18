// tasks.test.js
const request = require('supertest');
const path = require('path');

// Define o ambiente como teste
process.env.NODE_ENV = 'test';

// Armazena o caminho do backend
const backendPath = path.resolve(__dirname, '../../../../taskweek backend');

// Caminho para o server.js (ajuste conforme necessário)
const serverPath = path.join(backendPath, 'server.js');

// Importa o app (use um try-catch para depuração)
let app;
try {
  app = require(serverPath);
} catch (error) {
  console.error('Erro ao importar o servidor:', error);
  console.error('Caminho tentado:', serverPath);
  throw error;
}

describe('API de Tarefas', () => {
  // Teste simples para verificar a rota principal
  test('GET / retorna mensagem de boas-vindas', async () => {
    try {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
    } catch (error) {
      console.error('Erro no teste:', error);
      throw error;
    }
  });

  // Teste básico para verificar a listagem de tarefas
  test('GET /api/tasks retorna um array', async () => {
    try {
      const response = await request(app).get('/api/tasks');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    } catch (error) {
      console.error('Erro no teste de tarefas:', error);
      throw error;
    }
  });
});