import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => {
        const { id, text } = todo;
        return (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => props.onDeleteTodo(id)}>DELETE</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
