import { Hono } from "hono";
import { completeTodo, createNewTodo, deleteTodo, getAllTodos, getTodoById, getTodoCount } from "../controllers/todo.controller.ts";

const todoRouter = new Hono();

todoRouter.get('/' , getAllTodos);
todoRouter.get('/count' , getTodoCount);
todoRouter.get('/:id' , getTodoById);
todoRouter.post('/' , createNewTodo);
todoRouter.patch('/done' , completeTodo);
todoRouter.delete('/:id' , deleteTodo);

export { todoRouter };