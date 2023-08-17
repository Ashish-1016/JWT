import { Router } from "express";
import { forgotpasswordUser, loginUser, logoutUser, signupUser, } from "../controllers/AuthControllers.js";


const AuthRoutes = Router()


AuthRoutes.post('/login',loginUser)
AuthRoutes.post('/logout',logoutUser)
AuthRoutes.post('/signup',signupUser)
AuthRoutes.post('/forgotpassword',forgotpasswordUser)







export default AuthRoutes