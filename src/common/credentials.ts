import * as dotenv from 'dotenv';
dotenv.config();



const credentials ={
   postgres:{
    USERNAME : process.env.DB_USER || "",
    DATABASE : process.env.DB_DATABASE || "",
    HOST  : process.env.DB_HOST || "",
    PASSWORD : process.env.DB_PASSWORD || "",
    DBPORT : Number(process.env.DB_PORT) || 5432,
    DIALECT:process.env.DB_DIALECT
   },
   
   secret_key:{
    JWT_KEY : process.env.SECRET_KEY || ""
   }
}

export default credentials;
