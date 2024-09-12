import { Router } from "express";
import {deleteUser, getUser, updateUser} from "../controllers/user.controllers.js";

const userRouter = Router();

// define routes for user
userRouter.route(":id").get(getUser);

// define routes for update user
userRouter.route(":id").patch(updateUser);

// define routes for delete user
userRouter.route(":id").delete(deleteUser);

export default userRouter;
