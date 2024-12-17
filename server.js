const express = require('express')

const app= express();

app.get('/',(req,res)=>
{
    res.send("Hello here version 1.5")
})

app.listen('4000','0.0.0.0',()=>
{
    console.log("server started at 4000")
})