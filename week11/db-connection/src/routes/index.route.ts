import { Hono } from "hono";
import { userRouter } from "./user.route.js";
import { todoRouter } from "./todo.route.js";

const mainRouter = new Hono();

mainRouter.route("/users", userRouter);
mainRouter.route("/todos", todoRouter);

export { mainRouter };