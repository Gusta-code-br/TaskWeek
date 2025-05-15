const request = require('supertest');
const app = require('../../server'); // Ajuste conforme a exportação do seu app Express

describe('API de Tarefas', () => {
  test('GET /api/tasks retorna lista de tarefas', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
  
  // Mais testes...
});