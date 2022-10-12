import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
    <div>
        <h2>Movie DB</h2>
        <NavLink to ="/movielist">Home</NavLink> 
        <NavLink to ="/"><Form></Form></NavLink> 
    </div>
    )
}

export default NavBar