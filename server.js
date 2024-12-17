const express = require('express')

const app= express();

app.get('/',(req,res)=>
{
    res.send("<h1>HELLO</h1><h2>Hiii</h2>")
})

app.listen('4000','0.0.0.0',()=>
{
    console.log("server started at 4000")
})