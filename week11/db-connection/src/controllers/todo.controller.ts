import type { Context } from "hono";
import * as todoModel from "../models/todo.model.js";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const markTodoComplete = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        if (isNaN(id)) {
            return c.json({ success: false, msg: "Invalid todo ID" }, 400);
        }

        const updatedTodo = await todoModel.updateTodoCompletion(id, true);
        return c.json({ success: true, data: updatedTodo, msg: "Todo marked as complete" });
    } catch (e) {
        return c.json({ success: false, msg: `${e}` }, 500);
    }
};

const updateTodoTitle = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const { title } = await c.req.json();

        if (!title || isNaN(id)) {
            return c.json({ success: false, msg: "Invalid title or ID" }, 400);
        }

        const updatedTodo = await todoModel.updateTodoTitle(id, title);
        return c.json({ success: true, data: updatedTodo, msg: "Todo title updated" });
    } catch (e) {
        return c.json({ success: false, msg: `${e}` }, 500);
    }
};

const getTodosByUser = async (c: Context) => {
    try {
        const userId = Number(c.req.param("id"));
        if (isNaN(userId)) {
            return c.json({ success: false, msg: "Invalid user ID" }, 400);
        }

        const todos = await todoModel.getTodosByUser(userId);
        return c.json({ success: true, data: todos, msg: "Todos fetched for user" });
    } catch (e) {
        return c.json({ success: false, msg: `${e}` }, 500);
    }
};


export { createTodo, getTodo, markTodoComplete, updateTodoTitle, getTodosByUser };