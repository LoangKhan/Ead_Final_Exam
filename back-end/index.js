const express=require('express')
const app=express();
const mongoose=require('mongoose')
const cors = require('cors')
const Controller=require("./Controller/Controller")
const middelware=require('./middelware/UserMid')
mongoose.connect('mongodb://127.0.0.1:27017/ead7')

app.use(cors())
app.use(express.json())

app.use(express.json());
app.use(express.static("public"));
app.use(bodyparser.json());
app.use(file());
app.use(bodyparser.urlencoded({ extended: true }));

const connection = mongoose.connect("mongodb://localhost/UserDatabase");
const database = mongoose.Schema({
   
  });
  


app.listen(3000,function(){
    console.log("Server is listening at 3000")
})