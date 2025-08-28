import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb connected successfully")

    }catch(error){
    console.error("Error connecting to MongoDB:",error);
    process.exit(1);
    }
}


