//MONGODB CONNECTION mongodb+srv://vianmixt:StrongPa55word!@cluster0.gukh8.mongodb.net/<dbname>?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const operationsRoutes = require('./routes/operationsRouter');

const app = express();

mongoose.connect('mongodb+srv://vianmixt:StrongPa55word@cluster0.gukh8.mongodb.net/operations?retryWrites=true&w=majority')
  .then(()=>{
    console.log('Succesfully connected to MongoDB Atlas!');
  })
  .catch((error)=>{
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  })



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/operations',operationsRoutes)

module.exports = app;

