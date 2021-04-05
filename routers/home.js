const User= require('../models/user');
const express = require("express");
const router= express.Router();


router.get('/', function(req, res){
    res.locals.title='Home';
    res.render('todo/form');
});

router.post('/',function(req,res){
    //res.send(`Tong: ${number1} va ${number2} là ${result}`);
    res.render('todo/result',{number1,number2,result});
});

module.exports= router;