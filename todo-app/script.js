// JavaScript code for the Todo App

// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Function to add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const listItem = document.createElement('li');
        listItem.textContent = todoText;

        // Create a remove button for each todo
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            todoList.removeChild(listItem);
        };

        listItem.appendChild(removeButton);
        todoList.appendChild(listItem);
        todoInput.value = ''; // Clear input field
    }
}

// Event listener for the add button
addButton.addEventListener('click', addTodo);

// Event listener for the enter key
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});