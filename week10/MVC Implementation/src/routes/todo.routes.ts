import { Hono } from 'hono';
import * as TodoController from '../controllers/todo.controllers.js';
import {
	validateIdParam,
	validateCreateTodo,
	validateUpdateTodo,
	validatePatchTodo,
} from '../middlewares/validators.js';

const todoRouter = new Hono();

todoRouter.get('/', TodoController.getTodos);
todoRouter.get('/search', TodoController.searchTodos);
todoRouter.get('/:id', validateIdParam, TodoController.getTodo);
todoRouter.post('/', validateCreateTodo, TodoController.createTodo);
todoRouter.put('/:id', validateIdParam, validateUpdateTodo, TodoController.updateTodo);
todoRouter.patch('/:id', validateIdParam, validatePatchTodo, TodoController.patchTodo);
todoRouter.delete('/:id', validateIdParam, TodoController.deleteTodo);

export default todoRouter;