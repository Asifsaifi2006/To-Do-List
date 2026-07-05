# To-Do List App

A simple To-Do List application built using HTML, CSS, and JavaScript. The application allows users to create, complete, delete, and persist tasks using the browser's Local Storage.

## Features

- Add new tasks
- Prevent empty task submissions
- Mark tasks as completed or incomplete
- Delete tasks
- Automatically save tasks in Local Storage
- Restore tasks after page refresh
- Responsive and clean user interface

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API

## Project Structure

```
todo-app/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── icon.png
    ├── checked.png
    └── unchecked.png
```

## How It Works

### Adding a Task

- Enter a task in the input field.
- Click the **Add** button or press **Enter**.
- The task is added to the list and saved in Local Storage.

### Completing a Task

- Click on a task.
- The task toggles between completed and incomplete.
- The completion status is automatically saved.

### Deleting a Task

- Click the **x** button beside a task.
- The task is removed from both the UI and Local Storage.

### Persistent Storage

The application uses the browser's Local Storage to store tasks.

Each task is saved as an object with the following structure:

```javascript
{
    id: 1720187345123,
    text: "Complete JavaScript project",
    completed: false
}
```

Tasks are converted to JSON before storing:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

When the application loads, the saved tasks are retrieved and rendered automatically.

## Installation

1. Clone the repository.

```bash
git clone https://github.com/your-username/todo-app.git
```

2. Navigate to the project directory.

```bash
cd todo-app
```

3. Open `index.html` in your preferred browser.

No additional dependencies or installation steps are required.

## Screenshots

Add screenshots of the application here if desired.

Example:

```
screenshots/
├── home.png
└── completed-task.png
```

## Future Improvements

- Edit existing tasks
- Task filtering (All, Active, Completed)
- Clear all completed tasks
- Drag-and-drop task ordering
- Due dates and reminders
- Dark mode
- Mobile-first responsive improvements

## Browser Support

The application works in all modern browsers that support:

- Local Storage API
- ES6 JavaScript
- CSS Flexbox

## Learning Objectives

This project demonstrates:

- DOM Manipulation
- Event Handling
- JavaScript Objects and Arrays
- Array Methods (`push`, `filter`, `forEach`)
- Local Storage API
- JSON Serialization (`JSON.stringify` and `JSON.parse`)
- Dynamic HTML Element Creation
- Basic Application State Management

## License

This project is open source and available under the MIT License.
