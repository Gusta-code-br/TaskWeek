app.use(cors());
app.use(express.json());

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

startServer();

module.exports = app; // Para testes

const errorHandler = (error, req, res, next) => {
    console.error('Erro:', error);
    
    // Erro de validação do Sequelize
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Erro de validação',
        details: error.errors.map(e => e.message)
      });
    }
    
    // Erro de banco de dados do Sequelize
    if (error.name === 'SequelizeDatabaseError') {
      return res.status(500).json({
        error: 'Erro de banco de dados',
        message: error.message
      });
    }
    
    // Erro genérico
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: error.message
    });
  };
  
  module.exports = errorHandler;