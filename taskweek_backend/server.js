require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de boas-vindas
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API do TaskWeek!' });
});

// Rotas de tarefas
app.use('/api/tasks', taskRoutes);

// Error handler
app.use(errorHandler);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});