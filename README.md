# React Fundamentals Demo

A simple React.js project for beginner students. This project demonstrates the most important React concepts with easy examples.

## Topics Covered

- React Components
- JSX
- Props
- State
- `useState`
- Event Handling
- Reusable UI
- Basic CSS Styling

## Project Demo

The application contains three simple sections:

1. **Components & Props** – Reusable student cards receive different data through props.
2. **State with useState** – A counter can be increased, decreased, or reset.
3. **Event Handling** – A button click changes a message on the screen.

## Project Structure

```text
react-fundamentals-demo/
├── src/
│   ├── components/
│   │   └── StudentCard.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/sohailblockchain/react-fundamentals-demo.git
```

### 2. Open the project folder

```bash
cd react-fundamentals-demo
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Important Code Examples

### Component

```jsx
function StudentCard({ name, course }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Course: {course}</p>
    </div>
  );
}
```

### Props

```jsx
<StudentCard name="Ali" course="React.js" />
```

### State

```jsx
const [count, setCount] = useState(0);
```

### Event Handling

```jsx
<button onClick={() => setCount(count + 1)}>
  Increase
</button>
```

## Simple React Flow

```text
User Action
    ↓
React Event
    ↓
Function Runs
    ↓
State Changes
    ↓
React Updates the UI
```

## Learning Goal

After completing this project, students should understand how React applications are divided into components, how data is passed using props, how state changes with `useState`, and how user actions are handled with events.

## Student Practice Tasks

Try these changes after running the project:

- Add one more student card.
- Add a new `Double` button to the counter.
- Change the page heading.
- Create another reusable component.
- Change the message shown after clicking the event button.

## Technologies

- React.js
- JavaScript
- Vite
- CSS

## Author

**Sohail Ahmed**

GitHub: [sohailblockchain](https://github.com/sohailblockchain)

---

This repository is created for React.js classroom demonstration and beginner practice.
