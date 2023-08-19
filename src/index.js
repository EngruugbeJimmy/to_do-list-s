import renderTodo from './modules/renderTodo';
import setMoreOption from './modules/setMoreOption';
import './styles.css';

const TodoContainer = document.querySelector('.todo-list');
const Input = document.querySelector('.add');
const Form = document.querySelector('form');

let TodoList = [];
function getTodos() {
  if (localStorage.getItem('todos')) {
    TodoList = JSON.parse(localStorage.getItem('todos'));
  }
}

getTodos();

function addTodo() {
  Form.addEventListener('submit', (e) => {
    e.preventDefault();
    getTodos();
    TodoList.push({
      discription: Input.value,
      index: TodoList.length !== 0 ? TodoList[TodoList.length - 1].index + 1 : 1,
      completed: false,
    });
    localStorage.setItem('todos', JSON.stringify(TodoList));
    getTodos();
    renderTodo(TodoList, TodoContainer);
    setMoreOption(TodoList, renderTodo, TodoContainer);
    Input.value = '';
  });
}

addTodo();
renderTodo(TodoList, TodoContainer);
setMoreOption(TodoList, renderTodo, TodoContainer);