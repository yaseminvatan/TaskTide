// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
return nextId++;
}
// Save tasks and nextId to localStorage
function saveToLocalStorage(){
localStorage.setItem("tasks", JSON.stringify(taskList));
localStorage.setItem("nextId", JSON.stringify(nextId));
}

// Todo: create a function to create a task card
function createTaskCard(task) {
   const colorClass =
   // i love this phrase a lot. ots the shorter version of if else conditions.so i use this. 
   dayjs().isAfter(task.dueDate) ? "bg-danger" : daysjs().isSame(task.dueDate, "day") ? "bg-warning" : "bg-light";  
   return $(
      <div class="card md-2 ${colorClass}" data-id="${task.id}">
       <div class="card-body">
         <h5 class="card-title">${task.title}</h5>
         <p class="card-text">${task.description}</p>
         <p class="card-text">
            <small>DUe: ${dayjs(task.dueDate).format("MMM DD, YYYY")}</small>
         </p>
         <button class="btn btn-danger btn-sm delete-task">Delete</button>
       </div>
      </div>
   );
}
  

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
