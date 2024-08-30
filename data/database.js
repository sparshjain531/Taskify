import mongoose from "mongoose";

const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,
        {dbName:"backendbysparsh"})
        .then(()=>{console.log("Connected With Database")})
        .catch(()=>{console.log("Not connected With Database")})
}

export default connectDB;