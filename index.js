const express= require('express');
const app= express()
const counterWebReload = require('./countViews/counterUsers')
const port= process.env.PORT || 4000
app.listen(port)
app.get('/',(req,res)=>{
    res.send('hola a todos')
})
counterWebReload()
console.log(`listen to :${port}`)