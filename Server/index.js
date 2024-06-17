const express = require('express')
const mongoose = require('mongoose')
const appRoutes = require('./routes/product')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(appRoutes);


mongoose.connect('mongodb://localhost:27017/Shopping',{
}).then((req,res) => {
    console.log("MongoDb is Connected")
}).catch((error) =>{
    console.error(error);
})


const  PORT = process.env.PORT || 5000;
app.listen(PORT,(req,res)=>{
    console.log(`App is running on port : ${PORT}`)
})
