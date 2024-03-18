import React, { useState } from 'react';

const TodoList = ({ day, tasks, addTask, toggleComplete, deleteTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      addTask(taskInput, day);
      setTaskInput('');
    }
  };

  return (
    <div>
      <h2>{day}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input 
        type="text"
        placeholder="Add new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoList;
