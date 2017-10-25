import express from 'express';
require('dotenv').config();

const app = express();

// ROUTES

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
