import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className='text-white'>{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}> x </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos