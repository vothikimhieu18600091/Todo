const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');
const User = require('./user');
const Model= Sequelize.Model;


const Todo = db.define('Todo',{
    name:{
        type:DataTypes.STRING,
         allowNull:false,
    },
    done:{
        type:DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull:false,
    },
});
User.hasMany(Todo);
Todo.belongsTo(User);
Todo.findAllNotDone= async function(){
    return Todo.findAll(
        {
            where:{
                done:false,
            }
    });
}
Todo.addtodo= async function(name){
    return Todo.create(
        {
            name,done:false
    });
}
Todo.findById= async function(id){
    return Todo.findByPk(id);
}
Todo.markAsDone=async function(todo){
    todo.done=true;
    return todo.save();
}
module.exports=Todo;
