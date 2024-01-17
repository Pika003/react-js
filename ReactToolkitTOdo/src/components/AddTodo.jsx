import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
import './AddTodo.css'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        if(input != ''){
          dispatch(addTodo(input))
        }
        setInput('')
    }

  return (
    <div style={{marginBottom: "30px"}}>
      <form onSubmit={addTodoHandler}>
        <input className='inpt' type="text" 
        placeholder='Enter a Todo...' 
        value={input} 
        onChange={(e)=>setInput(e.target.value)}
        />
        <button className='button-50'role="button" type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
