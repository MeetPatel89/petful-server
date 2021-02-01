const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/', require('../people/people.router'));
app.use('/', require('../pets/pets.router'));

module.exports = app;
