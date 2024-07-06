import mongoose from "mongoose";

const connectToMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to the Mongodb");
    } catch (error) {
        console.log("We can not able to connect with mongodb",error.message)
    }
}

export default connectToMongoDB;