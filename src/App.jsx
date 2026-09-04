import { useState } from "react";
import StudentCard from "./components/StudentCard";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Welcome to React.js!");

  function changeMessage() {
    setMessage("Great! You handled a React event.");
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Beginner Classroom Demo</p>
        <h1>React.js Fundamentals</h1>
        <p>
          Learn components, props, state, events, and reusable UI with one
          simple project.
        </p>
      </section>

      <section className="card">
        <h2>1. Components & Props</h2>
        <p>
          The student cards below use one reusable component with different
          props.
        </p>

        <div className="student-grid">
          <StudentCard name="Ali" course="React.js" />
          <StudentCard name="Sara" course="JavaScript" />
          <StudentCard name="Ahmed" course="Web Development" />
        </div>
      </section>

      <section className="card">
        <h2>2. State with useState</h2>
        <p>The counter value is stored in React state.</p>

        <div className="counter">
          <span className="count">{count}</span>
          <div className="button-row">
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button className="secondary" onClick={() => setCount(0)}>
              Reset
            </button>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>3. Event Handling</h2>
        <p className="message">{message}</p>
        <button onClick={changeMessage}>Click Me</button>
      </section>

      <section className="card concepts">
        <h2>Concepts Used</h2>
        <div className="concept-grid">
          <span>Components</span>
          <span>JSX</span>
          <span>Props</span>
          <span>useState</span>
          <span>onClick</span>
          <span>Reusable UI</span>
        </div>
      </section>

      <footer>
        React Fundamentals Demo • Built for beginner students
      </footer>
    </main>
  );
}

export default App;
