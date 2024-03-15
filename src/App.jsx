import React, { useState } from 'react';
import './styles.css';
import TodoList from './TodoList.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const addTask = (task, day) => {
    const newTask = { task, day };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h1>Weekly To-Do List</h1>
      {daysOfWeek.map(day => (
        <TodoList key={day} day={day} tasks={tasks.filter(task => task.day === day)} addTask={addTask} />
      ))}
    </div>
  );
}

export default App;
