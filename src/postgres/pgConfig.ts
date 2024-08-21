import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'
import credentials from '../common/credentials';


dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // This may be necessary depending on your Render configuration
    },
  },
   // Adjust the path as needed
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