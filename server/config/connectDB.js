import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

if(!process.env.MONGODB_URI){
    throw new Error(
        "Please provide your MongoDB URI in the .env file"
    )
}

async function connectDB() {
    try{
       await mongoose.connect(process.env.MONGODB_URI)
       console.log("MongoDB connected")
    }catch(error) {
        console.log("MongoDB connection error:", error.message)
        process.exit(1)
    }
}

export default connectDB