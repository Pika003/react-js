import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <div style={{display: "flex",
        backgroundColor: "orange",
        padding: "15px",
        gap: "30px",
        fontWeight: "bold",
        height: "50px",
        paddingLeft: "45%"
      }}>    
        <li style={{listStyle: "none"}}>
            <NavLink to="/" style={{textDecoration: "none"}}>
                Home
            </NavLink>
        </li>
        <li style={{listStyle: "none"}}>
            <NavLink to="/about" style={{textDecoration: "none"}}>
                About
            </NavLink>
        </li>
        <li style={{listStyle: "none"}}>
            <NavLink to="/github" style={{textDecoration: "none"}}>
                Github
            </NavLink>
        </li>
      </div>
    </>
  )
}

export default Header