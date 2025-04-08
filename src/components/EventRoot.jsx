import React from 'react'
import { Outlet } from 'react-router-dom'

const EventRoot = () => {
  return (
    <div>
     Event wrapped !
     <Outlet/>
    </div>
  )
}

export default EventRoot
