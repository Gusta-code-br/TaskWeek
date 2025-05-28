const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Sem destructuring

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O título da tarefa é obrigatório'
      }
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  day: {
    type: DataTypes.ENUM('SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO', 'DOMINGO'),
    allowNull: false,
    validate: {
      isIn: {
        args: [['SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO', 'DOMINGO']],
        msg: 'O dia da semana deve ser válido'
      }
    }
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'tasks',
  timestamps: true
});

module.exports = Task;