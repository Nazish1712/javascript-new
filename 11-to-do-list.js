const todoList = [{
    name:'make dinner', 
    dueDate: '2024-02-20'},
    { name:'wash dishes',
    dueDate:'2024-02-20'}
];  

renderTodoList();

function renderTodoList(){
let todoListHTML = '';     //accumulator pattern so a variable to store html

todoList.forEach(function(todoObject ,index) {
    const {name , dueDate} = todoObject;
    const html = 
    `<div>${name}</div>
     <div>${dueDate}</div> 
     <button onclick="
     todoList.splice(${index}, 1);
     renderTodoList();
     " class="delete-todo-button" >Delete</button>
    `;
    
    todoListHTML += html;
});

document .querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector
    ('.js-name-input'); 
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector
    ('.js-due-date-input');

    const dueDate = dateInputElement.value;

    todoList.push(
        {name, 
        dueDate
    }); // shortcut in object if property and value  name are same 

    inputElement.value ='';

    renderTodoList();
}