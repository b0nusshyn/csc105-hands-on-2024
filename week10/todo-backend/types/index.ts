type Variables = {
  id: number;
};

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type createTodoBody = {
  title: string;
};

export type { Variables, Todo, createTodoBody };