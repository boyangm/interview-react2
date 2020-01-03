import React from 'react'
import { NavLink } from 'react-router-dom'

//our NavBar
const NavBar = (props) => {
    const {match} = props;
    return (
        <div className='navBar'>
            <NavLink className='Links' to='/interview-react2/home/start'>Start Activity</NavLink>
            <NavLink className='Links' to='/interview-react2/home/stop'>Stop Activity</NavLink>
            <NavLink className='Links' to='/interview-react2/activity'>Stats</NavLink>
        </div>
    )
}

export default NavBar
