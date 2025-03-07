# MyTodo App - Logic and Explanation

## 1. Designing the UI

The MyTodo app is built using React and Tailwind CSS for a responsive UI. The application consists of three primary components:

- **Navbar**: Displays the application logo and navigation menu.
- **Body**: Contains the main functionality, including an input field, save button, checkboxes, and todo items with edit and delete options.
- **Footer**: Displays copyright information and social media links.

## 2. Architecture of UI

### Navbar
- The Navbar component is a simple header with branding and navigation links.

### Body
The main section where users can:
- Add new todo items.
- View the list of saved todos.
- Mark todos as completed.
- Edit or delete todos.
- Toggle visibility for completed todos.
- State management is handled using React's `useState` and `useEffect` hooks.

### Footer
- Displays copyright information and links to social media profiles.
- Styled with Tailwind CSS to match the rest of the application.

## 3. Build Functions

### useState and useEffect
- `useState` is used to manage the state of todos, input value, and visibility filter.
- `useEffect` is used to load todos from `localStorage` when the component mounts.

### handleChange
- Updates the state of the input field whenever the user types a new todo.
- Ensures that the latest input value is captured.

### handleAdd
- Adds a new todo to the list when the save button is clicked.
- Generates a unique ID for each todo using `uuidv4`.
- Resets the input field after adding a new todo.
- Saves the updated todos list to `localStorage`.

### handleEdit
- Finds the todo by its ID and updates the input field with its current text.
- Removes the edited todo from the list so the user can re-add it after modifications.
- Saves changes to `localStorage`.

### handleDelete
- Removes the selected todo from the list.
- Updates `localStorage` to persist changes.

### handleCheckbox
- Toggles the `isCompleted` state of a todo when the checkbox is clicked.
- Updates `localStorage` accordingly.

### toggleFinished
- Toggles the visibility of completed todos.
- If checked, completed todos are displayed; otherwise, they are hidden.

### saveToLS
- Saves the current todos list to `localStorage` for persistence.
- Ensures that todos are not lost when the page is refreshed.

## 4. LocalStorage Integration

- The app uses `localStorage` to store and retrieve todos.
- `JSON.stringify` is used to convert the list to a string before saving.
- `JSON.parse` is used to convert it back into an object when retrieving.

## 5. Component Breakdown

### Navbar
- A simple navigation bar for branding.

### Footer
- Displays developer credit, copyright, and social links.

### App Component
- The main functional component that holds all states and manages user interactions.
- Uses the `useState` hook for handling todos.
- Uses `useEffect` to fetch todos from `localStorage` when the app loads.
- Manages adding, deleting, editing, marking as complete, and filtering todos.

## 6. Conclusion

This MyTodo app provides a simple and efficient way to manage daily tasks with persistent storage. React's hooks make it interactive, while Tailwind CSS ensures a clean and responsive UI.

---
### - by Hrithik Singh

