import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import { router } from './routes/index.js';
import { rateLimit } from './middleware/redis.js';

dotenv.config();
const app=express();
app.use(rateLimit);
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
    origin:"*",
    credentials:true,
}));
app.use(morgan('common'));
app.use("/",router)
const PORT:string=process.env.PORT||"3000";
const MONGO_URI:string=process.env.MONGO_URI||"";   
mongoose.connect(MONGO_URI,{}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
    
})
