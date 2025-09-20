import mongoose from 'mongoose';
import { mongoURI } from './env.js';

const connectDB = async() => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Database connected success");
        
    } catch (error) {
        
        console.log("Database connection failed");
        process.exit();
    }
}

export default connectDB;