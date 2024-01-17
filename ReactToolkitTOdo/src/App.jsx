import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <>
      <div style={{display: "flex",
        alignItems: "center",
        justifyContent:"center",
        flexDirection: "column",
        marginTop: "50px",
      }}>
        <AddTodo/>
        <Todos/>
      </div>
    </>
  )
}

export default App
