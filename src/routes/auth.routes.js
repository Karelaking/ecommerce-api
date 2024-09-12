import { Router } from "express";
import { userRegister, userLogin } from "../controllers/auth.controllers.js";

const authRouter = Router();

// Define routes for user registration
authRouter.route("/register").post(userRegister);

// Define routes for user login
authRouter.route("/login").post(userLogin);

export default authRouter;
