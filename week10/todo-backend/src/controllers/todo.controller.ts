import type { Context } from "hono";
import * as TodoModel from "../models/todo.model.ts";
import type { createTodoBody, Todo } from "../../types/index.ts";
 
export const getAllTodos = (c: Context) => {
    const todos = TodoModel.getAllTodos();
   return c.json({
     success: true,
     data: todos,
     msg: "Successfully get todos",
   });
};

export const getTodoCount = (c: Context) => {
    const todos = TodoModel.getAllTodos();
   const todoLength = todos.length;
   return c.json({
     success: true,
     data: todoLength,
     msg: "Counted a todos!!!",
   });
};

export const getTodoById = (c: Context) => {
    const todos = TodoModel.getAllTodos();
   const id = c.get("id");
   const todo = todos.find((todo) => todo.id === id);
   if (todo !== undefined) {
     return c.json({
       success: true,
       data: todo,
       msg: "Todo Found!!",
     });
   }
   return c.json({
     success: false,
     msg: "Todo not found!",
   });
}

export const createNewTodo = async (c: Context) => {
    const todos = TodoModel.getAllTodos();
  try {
    const body: createTodoBody = await c.req.json();
    if (!body.title) {
      return c.json({ success: false, msg: "Missing required field" });
    }
    let lastMaxId: number = 0;
    todos.forEach((todo) => (lastMaxId = Math.max(lastMaxId, todo.id)));
    const newTodo: Todo = {
      id: lastMaxId + 1,
      title: body.title,
      completed: false,
    };
    todos.push(newTodo);

    return c.json({
      success: true,
      data: newTodo,
      msg: "Done creating new todo",
    });
  } catch (e: any) {
    return c.json({
      success: false,
      msg: e.toString(),
    });
  }
};

export const completeTodo = async (c: Context) => {
    const todos = TodoModel.getAllTodos();
  try {
    const id = c.req.query("id");
    if (!id) {
      return c.json("Missing required field");
    }
    if (!/^\d+$/.test(id)) {
      return c.json("Invalid variable type");
    }
    todos.forEach((todo) => {
      if (todo.id == parseInt(id)) {
        todo.completed = true;
      }
    });
    return c.json({
      success: true,
      msg: "Update todo successfully",
    });
  } catch (e: any) {
    return c.json({
      success: false,
      msg: e.tostring(),
    });
  }
};

export const deleteTodo = (c: Context) => {
    const todos = TodoModel.getAllTodos();
    try{
      const idParam = c.req.param('id');
      if (!/^\d+$/.test(idParam)) return c.json('id is not a number!');
      const id = parseInt(idParam);
      const index = todos.findIndex((todo) => todo.id == id);
      if(index == -1){
        return c.json({
          success:false,
          msg:'todo not found',
        });
      }
      const selectedTodo = todos[index];
      todos.splice(index,1);
  
      return c.json({
        success:true,
        data: selectedTodo,
        msg: 'successfully deleted todo',
      })
    }catch (e: any) {
      return c.json({
        success: false,
        msg: e.tostring(),
      });
    }
  };