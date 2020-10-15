require('dotenv').config();
const express = require('express');
const routes = require('./routes.js');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(routes);
app.use(cors('localhost:3000'));

app.listen(process.env.PORT || 3333);
