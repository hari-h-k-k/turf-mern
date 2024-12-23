const express = require('express');

const cors=require('cors');

const bodyParser=require('body-parser');

const routes=require('./routes');

const connectDB=require('./config/db');

connectDB();

const app=express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);

module.exports=app;