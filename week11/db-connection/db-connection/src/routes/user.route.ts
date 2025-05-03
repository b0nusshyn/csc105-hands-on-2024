import { Hono } from "hono";
import * as userController from "../controllers/user.controller.js";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/all", userController.getAllUsers);
userRouter.patch("/updateName/:id", userController.updateName);


export { userRouter };