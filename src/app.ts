import express from 'express';
import authRoutes from './routes/authRoutes';
import courseRoutes from './routes/courseRoutes'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors';
dotenv.config();

const app = express();


app.use(bodyParser.json());
app.use(express.json());

app.use(cors()); 
app.use('/api/auth', authRoutes);
app.use('./api/courses',courseRoutes);
app.get('/',(req,res)=>{
    res.send('Hello World')
})


app.listen(process.env.PORT,()=>{
    console.log("Server is running on port",process.env.PORT)
})

export default app;
