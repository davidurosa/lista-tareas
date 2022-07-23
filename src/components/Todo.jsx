import React, { useState } from 'react'
import {RiDeleteBin2Fill} from 'react-icons/ri'
import {MdEdit} from 'react-icons/md'
import TodoForm from './TodoForm'


const Todo = ({todos,completeTodo,removeTodo,updateTodo}) => {

    const [edit, setEdit] = useState({
        id:null,
        value:''
    })


    const SubmitUpdate =value =>{
        updateTodo(edit.id,value);
        setEdit({
            id:null,
            value:''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={SubmitUpdate}/>
    }




  return  todos.map((todo,index)=>(
    <div className={todo.isConplete ?'todo-row complete':'todo-row'} key={index}>

        <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
           <p>{todo.text}</p> 
        </div>
        <div className='icons'>
            <RiDeleteBin2Fill className='delete-icon' onClick={() => removeTodo(todo.id)}/>
            <MdEdit className='edit-icon' onClick={()=> setEdit({id:todo.id,value:todo.text})}/>
        </div>
        
    </div>
  ))
}

export default Todo