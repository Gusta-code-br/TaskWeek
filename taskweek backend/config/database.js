const { Sequelize } = require('sequelize');
require('dotenv').config();

// Verifique se as variáveis de ambiente estão definidas
if (!process.env.DB_NAME || !process.env.DB_USER) {
  console.error('❌ Variáveis de ambiente de banco de dados não encontradas!');
  console.error('Por favor, configure o arquivo .env com as credenciais do banco de dados.');
  process.exit(1);
}

// Criar conexão usando parâmetros individuais em vez de URL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    define: {
      timestamps: true,
      underscored: true,
    }
  }
);

async function testConnection() {
  // Pular teste de conexão em ambiente de teste se a variável de ignorar estiver definida
  if (process.env.NODE_ENV === 'test' && process.env.SKIP_DB_CONNECTION === 'true') {
    return;
  }
  
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco de dados:', error.message);
    if (error.original) {
      console.error('Detalhes:', error.original.message);
    }
  }
}

// Executar teste de conexão apenas se não estivermos em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  testConnection();
}

module.exports = { sequelize, testConnection };