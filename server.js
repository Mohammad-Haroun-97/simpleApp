'use strict'

const express=require('express')
const app=express();
const PORT= process.env.PORT ||3600


app.get('/', (req,res)=>{

    res.send("Welcome to my simple App")
})

app.use(express.static('./public'));


app.listen(PORT, ()=>{
    console.log(`lisining to this thi ${PORT}`);
})
