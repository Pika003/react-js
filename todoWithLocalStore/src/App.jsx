import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=> {
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev)=> prev.map((prevTdo) => (prevTdo.id === id ? todo : prevTdo )))
  }

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos1"));
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos1", JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div>
        <div>
          <h1 style={{
            textAlign: "center",
            color: "#141822",
            margin: "30px",
            fontFamily: "cursive"
          }}>Manage Your Todos</h1>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {/* Todo From goes here */}
            <TodoForm />
          </div>
          <div style={{
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            flexDirection: "column", 
            gap: "10px"
          }}>
            {/* Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id}>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
