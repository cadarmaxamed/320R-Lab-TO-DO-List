import React, { useState } from 'react';

const TodoList = ({ day, tasks, addTask }) => {
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
          <li key={index}>{task.task}</li>
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
