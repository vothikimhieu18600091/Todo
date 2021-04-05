const express = require("express");
const bodyParser= require("body-parser");
const router= express.Router();
const expressLayouts= require('express-ejs-layouts');
const cookieSession = require('cookie-session');
const authMiddleware = require('./middlewares/auth');
const todoRouter= require('./routers/todo');
const userRouter= require('./routers/user');
const authRouter= require('./routers/auth');
const app = express();

const db = require('./models/db');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views","./views");

// Session
 
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }))
   
 app.use(authMiddleware);
// Session
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/todo',todoRouter);

app.get('/',function(req,res){
  res.locals.title='Home';
  res.render('index');
})
db.sync().then(function(){
  app.listen(process.env.PORT || 3000);

}).catch(console.error);
