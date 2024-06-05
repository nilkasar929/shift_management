import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'
import credentials from '../common/credentials';


dotenv.config();

const sequelize = new Sequelize({
  username: credentials.postgres.USERNAME,
  password: credentials.postgres.PASSWORD,
  database: credentials.postgres.DATABASE,
  host: credentials.postgres.HOST,
  port: credentials.postgres.DBPORT,
  dialect: credentials.postgres.DIALECT as 'postgres'
});

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