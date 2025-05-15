module.exports = {
    // Usar o arquivo de configuração que criamos
    setupFiles: ['<rootDir>/jest.setup.js'],
    
    // Transformar módulos ES
    transformIgnorePatterns: [
      // Por padrão, node_modules são ignorados pelo transformador
      // Isso fará o Jest transformar módulos específicos do node_modules
      '/node_modules/(?!axios|@paralleldrive/cuid2).+\\.js$'
    ],
    
    // Adicionar um transformador para módulos ES
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    
    // Mock para CSS, imagens, etc. que o Jest não consegue processar
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
    }
  };