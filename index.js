import express from "express"
import {config} from "dotenv"
import userRoute from './routes/user.js'
import taskRouter from './routes/task.js'
import cookieParser from "cookie-parser"
import { errorMiddleware } from "./middlewares/error.js"
import cors from "cors";

export const app=express()

config({
    path:"./config.env",
})

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.use("/api/v1/users",userRoute)
app.use("/api/v1/task",taskRouter)
    
app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"Home Page",
    })
})

app.use(errorMiddleware)