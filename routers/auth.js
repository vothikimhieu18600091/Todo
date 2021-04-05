const User = require('../models/user');
const express = require('express');
const router= express.Router();


//  title
router.use(function(req, res, next){
    res.locals.title= 'Login';
    next();
});

// load login
router.get('/login', function(req, res){
    res.locals.title='Login';
    res.render('auth/login');
});
// post
router.post('/login', function(req, res,next){
    const {username,password}= req.body;
    User.findByUser(username).then(function(found){
        if(found && found.password=== password){
            req.session.userId= found.id;
            res.redirect('/');
        }
        else{
            res.locals.title='Đăng nhập';
            res.render('auth/login');
        }
    }).catch(next);
    
});

router.get('/logout',function(req,res){
    delete req.session.userId;
    res.redirect('/');
})
module.exports= router;