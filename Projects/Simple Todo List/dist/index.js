"use strict";
const form = document.getElementById('todoForm');
const list = document.getElementById('todoList');
function readTodo() {
    const todoListJson = localStorage.getItem('todoList');
    if (!todoListJson)
        return [];
    return JSON.parse(todoListJson);
}
function saveTodo() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
const btn = document.createElement('button');
btn.innerText = 'Submit Form';
btn.type = 'submit';
form.insertAdjacentElement('beforeend', btn);
const todoList = readTodo();
todoList.forEach(createTodo);
const input = document.getElementById('todoInput');
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    input.value = '';
    todoList.push(newTodo);
    createTodo(newTodo);
    saveTodo();
}
function createTodo(todo) {
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
let mystery = 'Hello World!';
const numChars = mystery.length;
