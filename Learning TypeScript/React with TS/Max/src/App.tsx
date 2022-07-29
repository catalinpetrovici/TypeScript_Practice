import React from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const todosList = [{ id: 't1', text: 'Finish the course' }];

  const [todos, setTodos] = React.useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
