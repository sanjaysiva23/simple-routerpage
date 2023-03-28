const express = require('express');
const path = require('path');
const rootpath= require('../utils/path');
const router= express.Router();


router.get('/adds-products',(req,res,next)=>{
    res.sendFile(path.join(rootpath,'views','add-product.html'))
})

router.post('/shop-product',(req,res,next)=>{
    res.send('<b>product submitted</b>')
})

module.exports = router;