import express from "express"
import { getMyProfile, Login, Logout, register } from "../controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router=express.Router()

router.post("/new",register)
router.post("/login",Login)
router.get("/logout",Logout)
router.get("/me",isAuthenticated,getMyProfile)

export default router;