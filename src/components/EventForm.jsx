import React from 'react';
import { useState } from 'react';
import { Form } from 'react-router-dom';

const EventForm = ({method,event}) => {
console.log(event,"---6 ");

  return (
    <div>
      <Form method='post'>
         
        <input  placeholder='Enter your name'  name='name' type='text' required defaultValue={event ? event.name: ""} />

        <input placeholder='Enter date of event' name='date' type='date' required defaultValue={event?event.date:""}/>
        <input placeholder='Enter event details' name='event_details' type='text' required defaultValue={event?event.event_details:""}  />
        <input placeholder='Enter type of event' name='event' type='text' required defaultValue={event?event.event:""} />
        <button type='submit'>Save</button>
      </Form>
      
    </div>
  )
}

export default EventForm