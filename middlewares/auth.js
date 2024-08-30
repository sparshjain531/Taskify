import jwt from "jsonwebtoken"
import User from "../models/user.js";

export const isAuthenticated=async(req,res,next)=>{
    const {token}=req.cookies;

    if(!token){
        return res.status(404).json({
            success:false,
            message:"Login First!!!"
        })
    }

    const decode=await jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user=await User.findById(decode.id)
    next()
}