import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.js";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.patch("/completeStatus/:id", todoController.markTodoComplete);
todoRouter.patch("/changeTitle/:id", todoController.updateTodoTitle);
todoRouter.get("/getUserAllTodo/:id", todoController.getTodosByUser);
export { todoRouter };