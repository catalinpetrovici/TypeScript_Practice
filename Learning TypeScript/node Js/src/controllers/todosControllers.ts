import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const DATABASE_TODO: Todo[] = [];

const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  DATABASE_TODO.push(newTodo);

  res.status(201).json({ msg: 'Created the todo:', createTodo: newTodo });
};

const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: DATABASE_TODO });
};

const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const todoIndex = DATABASE_TODO.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('could not found todo');
  }

  DATABASE_TODO[todoIndex] = new Todo(DATABASE_TODO[todoIndex].id, updatedText);

  res.json({ message: 'Updated!', updateTodo: DATABASE_TODO[todoIndex] });
};

export { createTodo, getTodos, updateTodo };
