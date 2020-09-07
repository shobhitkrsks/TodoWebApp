const todoAdd = document.querySelector('.todo-add');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.todo-filter');

todoAdd.addEventListener('click', addTodo);
todoList.addEventListener('click', modifyTodoItem);
todoFilter.addEventListener('click', filterTodoItems);

function addTodo(event) {
  event.preventDefault();

  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');

  const todoText = document.createElement('li');
  todoText.classList.add('todo-text')
  todoText.innerText=todoInput.value;

  const todoComplete = document.createElement('button');
  todoComplete.classList.add('todo-complete');
  todoComplete.innerHTML='<i class="fas fa-check"></i>';

  const todoDelete = document.createElement('button');
  todoDelete.classList.add('todo-delete');
  todoDelete.innerHTML='<i class="fas fa-trash"></i>';


  todoItem.appendChild(todoText);
  todoItem.appendChild(todoComplete);
  todoItem.appendChild(todoDelete);

  todoList.appendChild(todoItem);

  todoInput.value='';
}

function modifyTodoItem(e) {
  const item = e.target;

  if(item.classList[0]==='todo-delete') {
      const todoItem = item.parentElement;
      todoItem.classList.add('delete-transition');
      todoItem.addEventListener('transitionend', function () {
        todoItem.remove();
      });
      
  }
  else if(item.classList[0]==='todo-complete') {
      const todoItem = item.parentElement;
      todoItem.classList.toggle('completed');
  }
}

function filterTodoItems(e) {
  const todosItems=todoList.childNodes;
  
  todosItems.forEach(function(todo_item){
    switch(e.target.value)
    {
      case "all":
        todo_item.style.display = 'flex';
        break;
      case "completed":
        if(todo_item.classList.contains('completed'))
          todo_item.style.display = 'flex';
        else
          todo_item.style.display = 'none';
        break;
      case "uncompleted":
        if(!todo_item.classList.contains('completed'))
          todo_item.style.display = 'flex';
        else
          todo_item.style.display = 'none';
          break;
    }
  });
}