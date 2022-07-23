import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  /* ==============add list================= */
  const addTodo = (todo) => {
    if (!todo.text || /^\s*S/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const completeTodo = id =>{
    let updatedTodos = todos.map(todo=>{
        if(todo.id===id){
            todo.isComplete = !todo.isComplete;
        }
        return todo;
    })
    setTodos(updatedTodos);
  }

  /* ========================update ========================*/

  const updateTodo=(todoId,newValue)=>{
    if (!newValue.text || /^\s*S/.test(newValue.text)) {
        return;
      }

      setTodos(prev=>prev.map(item=>(item.id===todoId? newValue:item)))

  }

/*============== Delete List============================== */

  const removeTodo = (id) =>{
    console.log('david');
    const removeArr =[...todos].filter(todo=>todo.id!==id)
    setTodos(removeArr)
  }

  return (
    <>
      <h1>¿Cuál es tu plan para hoy?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </>
  );
};

export default TodoList;
