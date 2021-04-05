
const User= require('../models/user');
const ensureLoggedIn = require('../middlewares/ensure_logged_in');
const express = require("express");
const router= express.Router();
const Todo=require('../models/todo');
router.use(ensureLoggedIn);
router.use(function(req,res,next){
    res.locals.title='Todo';
    next();
});

router.get('/', async function(req, res,next){
    const todos= await Todo.findAllNotDone();
    //res.send(`${todos}`);
    res.render('todo/result',{todos});
    next();
});
router.get('/:id/done', async function(req, res,next){
    const{ id}=req.params;
    const todo = await Todo.findById(id);
    if(todo){
        await Todo.markAsDone(todo);
    }
    res.redirect('/todo');
    next();
});


router.post('/',async function(req,res, next){
    console.log(req.body);
    const number= req.body.name;
     await Todo.addtodo(number);
    res.redirect('/todo');
    //console.log(todo.findAll());
   
    //res.send(`${todos}`);
   //console.log(todos.name);
   //res.render('todo/result',{todo});
    //res.render('todo/result',{todos});
});

module.exports= router;