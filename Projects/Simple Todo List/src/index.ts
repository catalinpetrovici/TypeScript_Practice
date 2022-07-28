const form = document.getElementById('todoForm') as HTMLFormElement;
const list = document.getElementById('todoList') as HTMLUListElement;

function readTodo(): Todo[] {
  const todoListJson = localStorage.getItem('todoList');
  if (!todoListJson) return [];
  return JSON.parse(todoListJson);
}

function saveTodo() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

const btn = document.createElement('button') as HTMLButtonElement;
btn.innerText = 'Submit Form';
btn.type = 'submit';
form.insertAdjacentElement('beforeend', btn);

interface Todo {
  text: string;
  completed: boolean;
}

const todoList: Todo[] = readTodo();
todoList.forEach(createTodo);

const input = document.getElementById('todoInput') as HTMLInputElement;

function handleSubmit(e: Event) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  input.value = '';
  todoList.push(newTodo);
  createTodo(newTodo);

  saveTodo();
}

function createTodo(todo: Todo) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  checkbox.addEventListener('change', function () {
    todo.completed = checkbox.checked;
    saveTodo();
  });

  const newLi = document.createElement('li');
  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
}

form.addEventListener('submit', handleSubmit);

//

let mystery: unknown = 'Hello World!';
const numChars = (mystery as string).length;
