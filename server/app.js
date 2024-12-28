const express = require('express');

const cors=require('cors');

const bodyParser=require('body-parser');

const routes=require('./routes');

const connectDB=require('./config/db');

connectDB();

const app=express();

app.use(cors({
    origin: '*', // Allow all origins
    methods: '*', // Allow all methods (GET, POST, PUT, DELETE, etc.)
    allowedHeaders: '*', // Allow all headers
}));

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, Lockspot!');
});

app.use('/api', routes);

module.exports=app;