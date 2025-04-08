import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const EventNavigation = () => {
  return (
    <div>
      <NavLink to="/events" className={({isActive})=>(isActive ? 'active' : '')} end>
        Events
      </NavLink>
      <NavLink to="/events/new"></NavLink>
    </div>
  )
}

export default EventNavigation
