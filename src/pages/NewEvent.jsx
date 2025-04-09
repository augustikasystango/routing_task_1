import React from 'react'
import EventForm from '../components/EventForm';
import axios from 'axios';

const NewEvent = () => {
  return (
    <div>
      NewEvent
      <EventForm/>
    </div>
  )
}

export default NewEvent

export async function action({request}){
  console.log("inside new action-------",request)
  
  try{
    const data = await request.formData();
    const eventData = {
      name:data.get('name'),
      event:data.get('event'),
      date : data.get('date'),
      event_details:data.get('event_details')
    }

    const res = await axios.post(`https://67eb8191aa794fb3222a78fb.mockapi.io/event`,
     eventData
    )
  }catch(error){
        console.log(error,"Error submitting form data")
  }
}