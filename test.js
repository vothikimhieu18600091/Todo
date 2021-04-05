//const fs= require('fs');
//const util = require('util');
//const readFileAsync= util.promisify(fs.readFile);
//(async function(){
    //const data = await readFileAsync('./hello.txt','utf-8');
    //console.log(data);
//})();
const { Sequelize, Model, DataTypes } = require('sequelize');
//const sequelize = new Sequelize('postgres://postgres:@localhost:5432/todo');
const sequelize = new Sequelize('todo', 'postgres', '1234', {
    host: 'localhost' || process.env.DATABASE_URL,
    dialect: 'postgres',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });
(async function()
{
    
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    }
    catch(error){
        console.error('Unable',error);
    }
})().catch(console.error);

