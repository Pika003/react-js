import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'
import { blue, green, pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () =>{
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggle = () =>{
        toggleComplete(todo.id)
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div style={{paddingRight: "50px"}}>
        <Checkbox
        id = "chekbox"
        type="checkbox"
        checked={todo.completed}
        onChange={toggle}

        {...label}
        defaultChecked
        sx={{
            marginBottom: "7px",
          color: blue[600],
          '&.Mui-checked': {
            color: blue[600],
          },
          '& .MuiSvgIcon-root': { fontSize: 35 }
        }}
      />
        {/* <input 
            id = "chekbox"
            type="checkbox"
            checked={todo.completed}
            onChange={toggle}
        /> */}
        <input
            style={{
              margin: "10px",
              padding: "7px",
              borderRadius: "3px",
              border: "none",
              outline: 'none',
              width: "400px",
              fontWeight: "bold",
              color: "#465678",
              fontFamily: "cursive",
              fontSize: "15px",
              backgroundColor: todo.completed ? "#b7c4ca" : "#e5f6fd",
              textDecoration: todo.completed ? "line-through" : "",
              textDecorationColor: todo.completed ? "red" : "inherit",
              textDecorationThickness: todo.completed ? "2px" : "auto",
            }}
            type="text"
            value={todoMsg}
            onChange={(e)=> setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
        />
        {/* Edit and save button */}
        <button
            style={{
                margin: "10px",
                padding: "7px",
                backgroundColor: todo.completed ? "#005e6a":"#00bcd4",
                borderRadius: "3px",
                border: "none"
            }}
            onClick={()=>{
                if(todo.completed) return;

                if(isTodoEditable){
                    editTodo()
                }else{
                    setIsTodoEditable((prev)=> !prev)
                }
            }}
            disabled={todo.toggle}
        >
            {isTodoEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Button  */}
        <button
            style={{
                margin: "10px",
                padding: "7px",
                backgroundColor: "#00bcd4",
                borderRadius: "3px",
                border: "none"
            }}
            onClick={()=> deleteTodo(todo.id)}
        >
            ❌
        </button>
    </div>
  )
}

export default TodoItem