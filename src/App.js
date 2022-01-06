import logo from './logo.svg';
import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoBtn } from './CreateTodoBtn.js';


const todos = [
  { text: 'Cortar Cebolla', completed: false},
  { text: 'Cepillarse los dientes ljlkjoijoijoijoijoijoijoijljlkjoijoijoij', completed: false},
  { text: 'Ordenar la ropa', completed: false},
  
]

function App() {
  return (
      <div className="container">
        <h1> 👋 Whats up for today? </h1>
        <TodoCounter/>

        <TodoSearch/>

        <TodoList>
          {todos.map((todo => (
            <TodoItem key={todo.text} text={todo.text}/>
          )))}
        </TodoList>

        <CreateTodoBtn/>
      </div>
  );
}

export default App;
