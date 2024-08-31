import mongoose from "mongoose";

const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,
        {dbName:"backendbysparsh"})
        .then((c)=>{console.log(`Connected With Database with ${c.connection.host}`)})
        .catch(()=>{console.log("Not connected With Database")})
}

export default connectDB;