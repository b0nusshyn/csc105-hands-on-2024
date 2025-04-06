import { Hono } from 'hono';
import { logger } from 'hono/logger';
import todoRoutes from './routes/todo.routes.js';
import { serve } from '@hono/node-server';

const app = new Hono();

app.use('*', logger());

app.get('/', (c) => {
	return c.json({
		message: 'Welcome to our Todo API!',
		status: 'Server is running',
	});
});

app.route('/todos', todoRoutes);

const port = 3000;

serve(
	{
		fetch: app.fetch,
		port,
	},
	(info) => console.log(`Server running at http://localhost:${info.port}`)
);