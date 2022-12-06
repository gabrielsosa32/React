// import logo from './logo.svg';
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import { TodoList } from './TodoList';
// import './App.css';
const todos = [
     {text: "cortar cebolla", completed: false},
     {text: "ponerle sal", completed: false },
     {text: "metertela en el recto", completed: false},
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      
    <TodoSearch />
   
    <TodoList>
      {todos.map(todo => (
      <TodoItem key={todo.text} text={todo.text}/>
      ))}
    </TodoList>
      
    
    <CreateTodoButton />
    
    </React.Fragment>
  );
}

export default App;
