const {DataTypes } = require('sequelize');
const db = require('./db');
const User = db.define('User',{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        //allowNull:false
    },
});
//const users = [{
    //id:1,
    //username:'18600091',
    //password: 'kocopass',
//}];

User.findByUser = async function(username){
    return User.findOne(
        {
            where: {
                username,
            },
        }
    );
};
User.findById = async function(id){
    return User.findByPk(id);
};

module.exports=User;