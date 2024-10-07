const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => { 
    res.send('Hello from Express.js!');
});

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`.bgBlue);
})
