const express = require('express');
const req = require('express/lib/request');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/hello',(req,res) =>{
    return res.json("Hello From node");
});

app.post('/hello',(req,res)=>{
    const {name} = req.body;
    return res.json("Hello "+name);
});
app.listen(3000);