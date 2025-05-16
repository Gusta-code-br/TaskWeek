const { Sequelize } = require('sequelize');
require('dotenv').config();

// Verifique se as variáveis de ambiente estão definidas
if (!process.env.DB_NAME || !process.env.DB_USER) {
  console.error('❌ Variáveis de ambiente de banco de dados não encontradas!');
  console.error('Por favor, configure o arquivo .env com as credenciais do banco de dados.');
  
  // Em ambiente de teste, podemos definir valores padrão
  if (process.env.NODE_ENV === 'test') {
    process.env.DB_NAME = 'taskweek_test';
    process.env.DB_USER = 'postgres';
    process.env.DB_PASSWORD = 'postgres';
    process.env.DB_HOST = 'localhost';
    process.env.DB_PORT = '5432';
    console.log('✅ Usando configurações de banco de dados padrão para testes.');
  } else {
    // Em produção, não queremos continuar sem as variáveis adequadas
    process.exit(1);
  }
}

// Configurações especiais para ambiente de teste
const testConfig = process.env.NODE_ENV === 'test' ? {
  logging: false, // Desativar logging em testes
  dialect: 'postgres',
  dialectOptions: {
    // Opções para acelerar os testes
    ssl: false
  }
} : {};

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
    },
    ...testConfig
  }
);

async function testConnection() {
  // Pular teste de conexão em ambiente de teste se a variável de ignorar estiver definida
  if (process.env.NODE_ENV === 'test' && process.env.SKIP_DB_CONNECTION === 'true') {
    return;
  }
  
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco de dados:', error.message);
    if (error.original) {
      console.error('Detalhes:', error.original.message);
    }
    
    // Em testes, não queremos falhar por causa de problemas de conexão com DB
    if (process.env.NODE_ENV !== 'test') {
      process.exit(1);
    }
  }
}

// Executar teste de conexão apenas se não estivermos em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  testConnection();
}

module.exports = { sequelize, testConnection };