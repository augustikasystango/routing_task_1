import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <div>
        <h3>Main nav</h3>
        <div>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>  Home </NavLink>

            <NavLink to="/events">Events</NavLink>
        
            
        </div>
       <Outlet/>
    </div>
  )
}

export default MainNavigation
