const express=require('express');

const app=require('./app.js');

const PORT=process.env.PORT|| 3000

app.listen(PORT, ()=>{
    console.log(`Hello world is running on port ${PORT}`)
});