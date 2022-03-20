const todo = document.querySelector('.todo');
const todoCotainer = document.querySelector('.todo-container');
const todoTop = document.querySelector('.todo-top');
const todoType = document.querySelector('.todo-type');
const todoNew = document.querySelector('.todo__new');
const todoFrm = document.querySelector('.todo-frm');
const todoInput = document.querySelector('.todo__content');
const todoList = document.querySelector('.todo__list');

const TODO_KEY = 'todos';
let todoItems = [];

function init() {
  const todoParsed = JSON.parse(localStorage.getItem(TODO_KEY));

  if (todoParsed) {
    todoParsed.forEach(listTodoInput);
    todoItems = todoParsed;
    saveTodo(todoItems);
  }
}

function showTodoCotainer() {
  todoCotainer.classList.toggle('hide');
  todoType.classList.add('hide');
  todoNew.classList.remove('hidden');
  todoFrm.classList.add('hidden');

  if (todoItems.length) {
    todoNew.classList.add('hidden');
    todoFrm.classList.remove('hidden');
    todoInput.focus();
  }
}

function showTodoType() {
  todoType.classList.toggle('hide');
}

function showTodoInput() {
  todoNew.classList.add('hidden');
  todoFrm.classList.remove('hidden');
  todoInput.focus();
}

function submitWriteTodo(event) {
  event.preventDefault();
  let value = todoInput.value.trim();
  if (value === '') {
    todoInput.value = '';
    todoInput.focus;
    return false;
  }

  if (todoItems.length > 4) {
    alert('오늘 할 일은 최대 5개까지 저장가능합니다.');
    todoInput.value = '';
    todoInput.focus;
    return false;
  }

  todoNew.classList.add('hide');
  todoInput.value = '';
  todoInput.focus();
  const todoObj = {
    id: Date.now(),
    text: value,
  };
  todoItems.push(todoObj);
  listTodoInput(todoObj);
}

function listTodoInput(todoObj) {
  const li = document.createElement('li');
  li.setAttribute('class', 'todo__item');
  li.setAttribute('id', todoObj.id);
  li.setAttribute('data-type', 'today');

  const span = document.createElement('span');
  const delBtn = document.createElement('button');
  span.innerText = `${todoObj.text}`;
  delBtn.innerText = '❌';
  li.appendChild(span);
  li.appendChild(delBtn);

  todoList.appendChild(li);
  saveTodo(todoItems);

  delBtn.addEventListener('click', removeTodo);

  function removeTodo(event) {
    const targetId = parseInt(event.target.parentElement.id);

    todoItems = todoItems.filter(e => {
      return e.id !== targetId;
    });

    saveTodo(todoItems);
    event.target.parentElement.remove();

    if (todoItems.length === 0) {
      todoNew.classList.remove('hide');
      todoNew.classList.remove('hidden');
      todoFrm.classList.add('hidden');
    }
  }
}

function saveTodo(todoObj) {
  const todoItem = JSON.stringify(todoObj);
  localStorage.setItem(TODO_KEY, todoItem);
}

init();
todo.addEventListener('click', showTodoCotainer);
todoTop.addEventListener('click', showTodoType);
todoNew.addEventListener('click', showTodoInput);
todoFrm.addEventListener('submit', submitWriteTodo);
