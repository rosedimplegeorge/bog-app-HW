require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error',err =>{
    console.log(err)
})

db.on('open',()=>{
    console.log('Successfully Connected to the MONGODB ')
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.send('Hello From ServerApp')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('------------------------------')
    console.log('Server is Running on PORT ' +PORT)
    console.log('------------------------------')
})