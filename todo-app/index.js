const addTodoBtn = document.getElementById("add-todo-btn");
const removeTodoBtn = document.getElementById("remove-todo");

addTodoBtn.addEventListener("click", () => {
  addTodo();
});

let todos = [];

function addTodo() {
  const currentTodo = document.getElementById("todo-input").value;

  todos.push({ id: currentTodo, value: currentTodo });
  renderTodos();

  document.getElementById("todo-input").value = "";
}

function renderTodos() {
  const todoItems = document.getElementById("todo-list-items");
  todoItems.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.innerHTML = `<p>${todo.value} <span class='remove-todo' data-index='${index}'>x</span></p>`;
    todoItems.append(todoItem);
  });

  // Attach event listeners to the remove buttons
  const removeButtons = document.querySelectorAll(".remove-todo");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      removeTodo(index);
    });
  });
}

function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}
