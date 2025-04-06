import type { Todo } from "../../types/index.ts";

export const todos: Todo[] = [
  { id: 1, title: "Learn Hono", completed: false },
  { id: 2, title: "Build a REST API", completed: false },
  { id: 3, title: "Create Todo App", completed: false },
];

export const getAllTodos = () => {
    return todos;
}