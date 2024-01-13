import React, { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [massage, setMassage] = useState("");

  function updateData(e) {
    e.preventDefault();
    if (UserName === "" || Password === "") {
      setMassage("All input filled is required!");
    } else {
      setMassage(`${UserName} has a Password : ${Password}`);
    }
  }

  return (
    <>
      <div style={{
        backgroundColor: "#97B0AA",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px"
      }}>
        <h1>Login Form In React Js</h1>
        <div
          style={{
            backgroundColor: "#008343",
            width: "300px",
            height: "300px",
            borderRadius: "10px",
          }}
        >
          <form 
           
          style={{ padding: "25px" }}>
            <h2
              style={{
                color: "#fEE",
                marginLeft: "83px",
                marginBottom: "10px"
              }}
            >
              Log In
            </h2>

            <input
              type="text"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="User Name"
              style={{
                margin: "15px",
                padding: "10px",
                borderRadius: "5px",
                color: "#2F4858",
                fontSize: "15px",
                fontWeight: "bold",
                border: "none",
              }}
            />
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              style={{
                margin: "15px",
                padding: "10px",
                borderRadius: "5px",
                color: "#2F4858",
                fontSize: "15px",
                fontWeight: "bold",
                border: "none",
              }}
            />
            <button
              onClick={updateData}
              type="submit"
              style={{
                backgroundColor: "#007EC3",
                color: "#fff",
                width: "100px",
                height: "40px",
                fontSize: "15px",
                fontWeight: "bold",
                marginLeft: "70px",
                marginTop: "10px",
                border: "none",
                borderRadius: "5px"
              }}
            >
              Submit
            </button>
            <div style={{ padding: "10px" }}></div>
          </form>
        </div>
        <HomePage massages={massage}/>
      </div>
    </>
  );
}

export default App;
