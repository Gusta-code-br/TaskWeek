require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/tasks', taskRoutes);

// Rota de teste da API
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API do TaskWeek!' });
});

// Middleware de tratamento de erros
app.use(errorHandler);

// Sincroniza com o banco de dados e inicia o servidor
async function startServer() {
  try {
    await sequelize.sync({ alter: true });
    console.log('Banco de dados sincronizado com sucesso.');
    
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Falha ao sincronizar o banco de dados:', error);
  }
}

// Iniciar o servidor apenas se este arquivo for executado diretamente
if (require.main === module) {
  startServer();
}

module.exports = app; // Para testes