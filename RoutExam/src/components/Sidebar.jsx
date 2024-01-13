import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div style={{
        position: "absolute",
        backgroundColor: "green",
        height: "85.6vh",
        width: "100px",
        zIndex: "22"
    }}>
        <div style={{
          padding: "20px",
          marginBottom: "10px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
          }}>
          <NavLink to="/"
              style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold"
          }}>
              Home
          </NavLink>

          <NavLink to="/about"
              style={{textDecoration: "none",
              color: "white", fontWeight: "bold"
          }}>
              About
          </NavLink>

          <NavLink to="/github"
              style={{textDecoration: "none",
              color: "white", fontWeight: "bold"
          }}>
              Github
          </NavLink>
        </div>
    </div>
  )
}

export default Sidebar