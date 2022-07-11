
import './App.css';
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoBtn } from '../CreateTodoBtn';


const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Cepillarse los dientes ljlkjoijoijoijoijoijoijoijljlkjoijoijoij', completed: false},
  { text: 'Ordenar la ropa', completed: true},
  
]
function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  const totalTodos = todos.length
  const completedTodos = todos.filter((todo)=>!!todo.completed).length
  const completeTodo = (text) => {
    const todoIndex = todos.indexOf(text)
    const newTodos = [...todos];
    if(newTodos[todoIndex] === newTodos[todoIndex].text){
      newTodos[todoIndex].completed = true;
    }
    return todos = newTodos;
  }

  let searchedTodos = [];
  if (!searchValue.length >=1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const searchText = searchValue.toLowerCase();
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText)
    })
  }
  return (
      <div className="container">
        <h1> 👋 Whats up for today? </h1>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
          {searchedTodos.map((todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={completedTodo}
              />
          )))}
        </TodoList>

        <CreateTodoBtn/>
      </div>
  );
}

export default App;
