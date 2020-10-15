require('dotenv').config();
const express = require('express');
const routes = require('./routes.js');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
