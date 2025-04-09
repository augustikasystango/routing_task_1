import React from 'react'
import EventForm from '../components/EventForm';
import axios from 'axios';
import { redirect } from 'react-router-dom';
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
  console.log("inside new action-------",request);
  const formdata = await request.formData();
  const name = formdata.get('name');
  const date = formdata.get('date');
  const event = formdata.get('event');
  const event_details = formdata.get('event_details');

  const errors={};
  if(!name || name.length < 3)
  {
     errors.name = "Enter a valid name.It must be more than 3 characters."
  }
  if(!date){
      errors.date = "Enter a valid date"
  }
  if(!event )
  {
    errors.event = "ENter event name"
  }
  if(!event_details || event_details.length<10)
  {
    errors.event_details = "Enter event details , more than 10 characters"
  }

  if(Object.keys(errors).length > 0)
  {
    return { errors };
  }


  
  try{
    //const data = await request.formData();
    const eventData = {
      // name:data.get('name'),
      // event:data.get('event'),
      // date : data.get('date'),
      //event_details:data.get('event_details')
      name,event,date,event_details
    }

    const res = await axios.post(`https://67eb8191aa794fb3222a78fb.mockapi.io/event`,
     eventData
    );
    console.log(res);
    if(res.status===201 || res.status===200){
      return redirect('/events')   
    }else{
      return  ({errors:{form:`Something went wrong .Please try again !`}})
    }
  }catch(error){
        console.log(error,"Error submitting form data")
  }
 
}

