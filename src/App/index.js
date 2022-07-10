
import './App.css';
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoBtn } from '../CreateTodoBtn';


const todos = [
  { text: 'Cortar Cebolla', completed: false},
  { text: 'Cepillarse los dientes ljlkjoijoijoijoijoijoijoijljlkjoijoijoij', completed: false},
  { text: 'Ordenar la ropa', completed: false},
  
]
const [todosValue, todosSetState] = React.UseState(todos)

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
