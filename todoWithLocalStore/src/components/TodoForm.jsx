import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e)=>{
        e.preventDefault()

        if(!todo) return;

        addTodo({todo:todo, completed: false})
        setTodo("")
    }

  return (
    <form onSubmit={add} style={{marginBottom: "35px"}}>
        <input 
            type="text" 
            placeholder='Write Todo...'
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              outline: 'none',
              width: "400px",
              fontWeight: "bold",
              color: "#ececed",
              backgroundColor: "#a1a2a6",
              fontFamily: "cursive",
              fontSize: "15px"
            }}
        />
        <button 
          style={{
            marginLeft: "25px",
            padding: "12.6px",
            borderRadius: "5px",
            width: "80px",
            backgroundColor: "#323d56",
            color: "#fff",
            fontSize: "15px",
            border: "none"
          }}
          type='submit'
        >Add</button>
    </form>
  )
}

export default TodoForm;