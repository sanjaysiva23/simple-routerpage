const express = require('express');
const bp=require('body-parser');
const app = express(); 
const adminRouter = require('./routes/add-products')
const shopRouter = require('./routes/shop')
const path = require('path');
app.use(bp.urlencoded())

  
app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})



app.listen(3000)