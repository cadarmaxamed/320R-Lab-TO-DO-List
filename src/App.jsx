import React, { useState } from 'react';
import './styles.css';
import TodoList from './toDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const addTask = (task, day) => {
    const newTask = { task, day, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Weekly To-Do List</h1>
      {daysOfWeek.map((day, index) => (
        <TodoList
          key={day}
          day={day}
          tasks={tasks.filter(task => task.day === day)}
          addTask={addTask}
          toggleComplete={handleToggleComplete}
          deleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default App;
