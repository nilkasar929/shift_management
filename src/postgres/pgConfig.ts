import {Sequelize} from 'sequelize'


const sequelize =new Sequelize({

    username:"postgres",        
    host:"localhost",           
    port:5432,                  
    password:"root",            
    database:"postgres",        
    dialect:"postgres"          
})


sequelize.authenticate()
.then(()=>{
    console.log("Database is connected")

}).catch((error)=>{
    console.log("error connecting to database",error)
})


sequelize.sync()
.then(()=>{
    console.log("database is synchronized")

}).catch((error)=>{
    console.log("error in syncronizing the databse ",error)
})


export default sequelize;