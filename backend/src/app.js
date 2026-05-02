const express = require ('express');
const cors = require ('cors');
require('dotenv').config();

const homeRoutes = require('./routes/home.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', homeRoutes);




module.exports = app;