const express = require('express');
app=express()

app.use(express.static('./'))

app.get('/',(req,res)=>{

    res.sendFile('index.html')

})

app.listen(50,()=>{
    console.log("er are running ");
})
