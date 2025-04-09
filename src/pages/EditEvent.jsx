import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

const EditEvent = () => {

  const data = useRouteLoaderData('event-detail');
  return (
    <div>
      EditEvent
      
      <EventForm method="PATCH" event={data.event}/>
    </div>
  )
}

export default EditEvent
