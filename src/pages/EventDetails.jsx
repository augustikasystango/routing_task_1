import React from 'react'
import { useParams } from 'react-router-dom'



const EventDetails = () => {
    const params = useParams();
    console.log(params.id);
  return (
    <div>
      EventDetails
     
    
    </div>
  )
}

export default EventDetails
