require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database'); // Import direto
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;