import mongoose from "mongoose";
import dotenv  from 'dotenv';
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

function connectDB(){
   mongoose.connect(MONGO_URL).then(() => {
      console.log("MongoDB connected successfully");
   }).catch((error) => {
      console.error("MongoDB connection error:", error);
   });
}


export default connectDB;