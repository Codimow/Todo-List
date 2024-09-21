import React, { useState } from 'react';
import { Trash2, RotateCcw } from 'lucide-react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy 1 kg Tomato', completed: false },
    { id: 2, text: 'Buy 2kg Onion', completed: false },
    { id: 3, text: 'Visit friend', completed: false },
    { id: 4, text: 'Clean House', completed: false },
    { id: 5, text: 'Washing Clothes', completed: true },
    { id: 6, text: 'Play Cricket', completed: true },
    { id: 7, text: '1 km Walking', completed: true },
    { id: 8, text: 'Do Homework', completed: true },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTodos([...todos, { id: todos.length + 1, text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      
      <h2 className="text-xl font-semibold mb-2">Things to be done</h2>
      <ul>
        {todos.filter(todo => !todo.completed).map(todo => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="mr-2"
            />
            <span>{todo.id}, {todo.text}</span>
            <Trash2 
              onClick={() => deleteTask(todo.id)}
              className="ml-auto cursor-pointer text-red-500"
              size={16}
            />
          </li>
        ))}
      </ul>
      
      <div className="flex mt-4 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Type new task..."
          className="flex-grow mr-2 p-2 border rounded"
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add New
        </button>
      </div>
      
      <h2 className="text-xl font-semibold mb-2">Completed</h2>
      <ul>
        {todos.filter(todo => todo.completed).map(todo => (
          <li key={todo.id} className="flex items-center mb-2 text-green-500">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="mr-2"
            />
            <span>{todo.id}, {todo.text}</span>
            <RotateCcw 
              onClick={() => toggleComplete(todo.id)}
              className="ml-auto cursor-pointer"
              size={16}
            />
            <Trash2 
              onClick={() => deleteTask(todo.id)}
              className="ml-2 cursor-pointer text-red-500"
              size={16}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;