
//Important
const todoList = JSON.parse((localStorage.getItem('todoObject'))) ||
[];

renderTodoList();

function renderTodoList(){

  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {  name } = todoObject; 
    const {  dueDate } = todoObject; 
    const html = ` 
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button class = "delete-todo-button js-delete-button">Delete</button>
    `;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();  
      saveToStorage();
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });
  
  saveToStorage();
  inputElement.value = '';
  renderTodoList();
}

function saveToStorage()
{
  localStorage.setItem('todoObject', JSON.stringify(todoList));
}