import './App.css';
import React, { useState } from 'react'
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import { todos } from "./__mock__/Todos"

function App() {
  const [todosList, updateTodos] = useState(() => todos.map((item) => ({ ...item, isEditing: false })));

  const addTodo = (newTodoData) => {
    updateTodos([...todosList, newTodoData])
  }

  return (
    <div data-testid="app" className="App">
      <h2>Todo App</h2>
      <TodoList list={todosList} />
      <Todo newTodo={addTodo} />
    </div>
  );
}

export default App;
