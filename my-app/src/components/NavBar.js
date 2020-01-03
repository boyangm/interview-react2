import React from 'react'
import { NavLink } from 'react-router-dom'

//our NavBar
const NavBar = () => {
    return (
        <div className='navBar'>
            <NavLink className='Links' to='/home/start'>Start Activity</NavLink>
            <NavLink className='Links' to='/home/stop'>Stop Activity</NavLink>
            <NavLink className='Links' to='/activity'>Stats</NavLink>
        </div>
    )
}

export default NavBar
