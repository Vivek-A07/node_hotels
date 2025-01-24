const express = require('express');
const app = express();
const db = require('./db')
require('dotenv').config();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000

// const { error } = require('console');

app.get('/', function (req, res) {
    res.send('Welcome To our hotel')
})


const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

const teaRoutes = require('./routes/teaRoutes');
app.use('/tea', teaRoutes);


app.listen(PORT, () => {
    console.log('Listening on port 3000 ')
})
