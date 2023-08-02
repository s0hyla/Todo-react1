import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  //Function to Add todo
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) // To handle if the user enter space
    {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)

  }
  //Function to Edit todo
  const updateTodo =(todoId,newValue)=>{
    if (!newValue.text || /^\s*$/.test(newValue.text)) 
    {
      return
    }
    setTodos(prev=>prev.map(item=>(item.id===todoId?newValue:item)))

  }

  //Function to Remove todo
  const removeTodo = (id)=>{
    const removeTask=[...todos].filter(todo=>todo.id !== id);

    setTodos(removeTask);
  }
  
  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  return <div>
    <h1>What's your Plan for Today?</h1>
    <TodoForm onSubmit={addTodo} />
    <Todo
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
    />
  </div>;
}

export default TodoList;


//console.log(todo,...todos); //Show all tasks The new task + The other previous tasks