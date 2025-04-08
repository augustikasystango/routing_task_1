import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';

const MainNavigation = () => {

  const navigation = useNavigation();
  return (
    <div>
        <h3>Main nav</h3>
        
        <div>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>  Home </NavLink>
           
            <NavLink to="/events">Events</NavLink>
        
            
        </div>
        { navigation.state ==='loading' &&  <p>Loading....</p>}
       <Outlet/>
    </div>
  )
}

export default MainNavigation
