import express from 'express';
require('dotenv').config();

const app = express();
module.exports = app;

// ROUTES

app.get('/', (req, res) => {
  res.send('Hello World!');
});
