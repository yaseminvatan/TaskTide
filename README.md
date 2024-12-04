# Task Board Application

A simple, interactive Kanban-style task management application that allows users to manage project tasks dynamically. This application is built using **jQuery**, **Day.js**, and **Bootstrap**, and features persistent task storage via **localStorage**.

---

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Description

The **Task Board Application** is a browser-based tool for organizing and tracking tasks. It allows users to:
- Add tasks with a title, description, and due date.
- Move tasks across progress states: **To-Do**, **In Progress**, and **Done**.
- Track tasks visually with color-coded deadlines.
- Delete completed or unnecessary tasks.
- Persist tasks across sessions using browser localStorage.

This tool is perfect for project team members or individuals looking to track their daily tasks or project progress in an intuitive and visually appealing way.

---

## Features

1. **Dynamic Task Management**  
   - Add, update, move, and delete tasks.
   - Drag and drop tasks across progress lanes.

2. **Color-Coded Task Status**  
   - Tasks are highlighted:
     - **Red**: Overdue.
     - **Yellow**: Due today.
     - **Neutral**: Upcoming.

3. **Persistent Storage**  
   - Tasks and their states are saved in `localStorage`, ensuring data remains intact across page reloads.

4. **Responsive Design**  
   - Fully responsive and mobile-friendly interface using **Bootstrap**.

5. **Date Handling**  
   - Utilizes the **Day.js** library to handle and format dates efficiently.

---

## Technologies Used

- **HTML5**  
  Semantic markup to structure the application.

- **CSS3 / Bootstrap**  
  Styling and layout, including responsive design and modal dialogs.

- **JavaScript / jQuery**  
  Core application logic, DOM manipulation, and interactivity.

- **Day.js**  
  Lightweight date manipulation library.

- **jQuery UI**  
  Drag-and-drop functionality for tasks.

- **localStorage**  
  For persisting tasks across sessions.

---

## Usage

1. **Add a Task**  
   - Click the **Add Task** button to open a modal.
   - Enter the task title, description, and due date.
   - Click **Save Task** to add the task to the **To-Do** lane.

2. **Move Tasks**  
   - Drag and drop tasks between lanes (**To-Do**, **In Progress**, **Done**) to update their status.

3. **Delete a Task**  
   - Click the **Delete** button on any task card to remove it.

4. **Visual Feedback**  
   - Tasks are highlighted in red if overdue and yellow if due today.

5. **Persistent Data**  
   - Tasks are automatically saved, so they persist after page reloads.

---

## Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-board.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-board
   ```
3. Open the `index.html` file in your browser.

---

## Screenshots

### Task Board Interface
![Task Board Interface](./assets/screenshots/task-board.png)

---

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/your-username/task-board/issues) to report any bugs or suggest new features.

---

## License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Bootstrap** for styling and modal dialogs.
- **jQuery** for simplifying DOM manipulation.
- **Day.js** for efficient date handling.
- **jQuery UI** for providing draggable and droppable functionality.