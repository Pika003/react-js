import React from 'react'
import './Todos.css'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
      <div>
        {todos.map((todo) => (
          <li className='listItm' key={todo.id}>
            <div className="checkbox-wrapper-11">
              <input id={todo.id} type="checkbox" name="r" defaultValue={2} />
              <label className='text' htmlFor={todo.id}>{todo.text}</label>
            </div>
            <button className='close-btn' onClick={() => dispatch(removeTodo(todo.id))}> x </button>
          </li>
        ))}
      </div>
    </>
  )
}

export default Todos