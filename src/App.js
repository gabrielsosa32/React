// import logo from './logo.svg';
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import { TodoList } from './TodoList';
// import './App.css';
const todos = [
     {text: "cortar cebolla", completed: true},
     {text: "cortar pimientos", completed: false },
     {text: "Cortar el pollo", completed: false},
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;


