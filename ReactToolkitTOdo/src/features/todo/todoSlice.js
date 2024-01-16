import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todo: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload //action.payload.text
            }
        },
        removeTodo: ()=>{

        },
    }
})