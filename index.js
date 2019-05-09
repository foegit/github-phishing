// load .env variables
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');

const connection = require('./db');
const dataRoutes = require('./routes/data');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/data', dataRoutes);

app.get('/', (req, res) => {
  res.sendFile('./index.html');
});


app.listen(PORT, () => {
  console.log(`Server start at ${PORT}.`);
});