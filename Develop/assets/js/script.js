// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
console.log("Loaded tasks:", taskList);
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

 // Ensure nextId is correctly set based on existing tasks
if (taskList.length > 0) {
   nextId = Math.max(...taskList.map(task => task.id)) + 1;
 } else {
   nextId = 1;  // Reset to 1 if no tasks
 }

// Todo: create a function to generate a unique task id
function generateTaskId() {
   console.log("Generated ID:", nextId);
   nextId++;
   localStorage.setItem("nextId", JSON.stringify(nextId))
return nextId;

console.log("Generated ID:", nextId);

}
// // Save tasks and nextId to localStorage
// function saveToLocalStorage(){
// localStorage.setItem("tasks", JSON.stringify(taskList));
// localStorage.setItem("nextId", JSON.stringify(nextId));
// }
console.log("Saving tasks:", taskList, "with nextId:", nextId);
// Todo: create a function to create a task card
function createTaskCard(task) {
   const colorClass =
   // i love this phrase a lot. ots the shorter version of if else conditions.so i use this. 
   dayjs().isAfter(task.dueDate) ? "bg-danger" : dayjs().isSame(task.dueDate, "day") ? "bg-warning" : "bg-light";  
   return $(`
      <div class="card mb-2 ${colorClass}" data-id="${task.id}">
       <div class="card-body">
         <h5 class="card-title">${task.title}</h5>
         <p class="card-text">${task.description}</p>
         <p class="card-text">
            <small>DUe: ${dayjs(task.dueDate).format("MMM DD, YYYY")}</small>
         </p>
         <button class="btn btn-danger btn-sm delete-task">Delete</button>
       </div>
      </div>
   `);
}
  
console.log("Loaded tasks from localStorage:", taskList);
// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
   $("#todo-cards, #in-progress-cards, #done-cards").empty();
   taskList.forEach((task) =>{
      const taskCard = createTaskCard(task);
      $(`#${task.status}-cards`).append(taskCard);
   });
   $(".card").draggable({
     helper: "clone",
     revert: "invalid",
   });
 }

// Todo: create a function to handle adding a new task
function handleAddTask(event){
   event.preventDefault();
   const title = $("#task-title").val().trim();
   const description = $("#task-description").val().trim();
   const dueDate = $("#task-due-date").val();
   
   // if one of the variable is false throw error
   if (!title || !description || !dueDate) {
      alert("Please fill out all fields!");
      return;
   }
   
   const newTask = {
      id: generateTaskId(),
      title,
      description,
      dueDate: dayjs(dueDate).format("YYYY-MM-DD"),
      status: "to-do",
   };
   console.log(`new task executed`,newTask)
  
   taskList.push(newTask);
   console.log("Tasks after adding:", taskList);
   localStorage.setItem("tasks", JSON.stringify(taskList));
   console.log("Loaded tasks from localStorage:", taskList);
   renderTaskList();
   $("#formModal").modal("hide"); //  When this code runs, the modal window with id="formModal" is closed.
   $("#task-form")[0].reset(); //The form fields inside the modal are cleared, ready for a new task to be entered the next time the modal is opened.
  }
   


// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
   const taskId = $(event.target).closest(".card").data("id");
   taskList = taskList.filter((task) => task.id !==taskId);
   localStorage.setItem("tasks", JSON.stringify(taskList));
   renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
   const taskId = ui.draggable.data("id");
   const newStatus = $(event.target).attr("id").split("-")[0];
 
   const task = taskList.find((t) => t.id === taskId);
   if (task) {
     task.status = newStatus;
   }
 
   localStorage.setItem("tasks", JSON.stringify(taskList));
   renderTaskList();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // Render tasks on page load
  renderTaskList();

  // Add event listeners
  $("#task-form").on("submit", handleAddTask);
  $(document).on("click", ".delete-task", handleDeleteTask);

  // Make lanes droppable
  $(".lane .card-body").droppable({
    accept: ".card",
    drop: handleDrop,
  });

  // Initialize date picker
  $("#task-due-date").datepicker({ minDate: 0 });

  // Save nextId to localStorage on unload
  //$(window).on("beforeunload", saveToLocalStorage);

});
