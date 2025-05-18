module.exports = {
  // A lista de caminhos onde o Jest deve procurar por arquivos de teste
  roots: ['<rootDir>/src'],
  
  // Extensões de arquivo que contêm testes
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  
  // Transformações de código
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  
  // Módulos que devem ser tratados como módulos ES
  transformIgnorePatterns: [
    '/node_modules/(?!(@babel|react-native|react-navigation)).+\\.js$'
  ],
  
  // Configuração de ambiente
  testEnvironment: 'node',
  
  // Caminhos de módulos para resolver importações
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  
  // Configurações para lidar com o ambiente de teste
  setupFiles: ['<rootDir>/jest.setup.js'],
  
  // Manipuladores de cobertura de código
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.js',
    '!src/reportWebVitals.js',
  ],
  
  // Ignore arquivos específicos
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  
  // Timeout para testes (em milissegundos)
  testTimeout: 10000,
};