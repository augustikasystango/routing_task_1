import React from 'react';
import { useState } from 'react';
import { Form ,useNavigation ,useActionData} from 'react-router-dom';

const EventForm = ({method,event}) => {
 const navigation = useNavigation();
 const data = useActionData();
 const isSubmitting = navigation.state==='submitting';

 



  return (
    <div>
      <Form method='post'>
         
        <input  placeholder='Enter your name'  name='name' type='text' required defaultValue={event ? event.name: ""} />
        {data?.errors?.name }


        <input placeholder='Enter date of event' name='date' type='date' required defaultValue={event?event.date:""}/>
        {data?.errors?.date }

        <input placeholder='Enter event details' name='event_details' type='text' required defaultValue={event?event.event_details:""}  />
        {data?.errors?.event_details }

        <input placeholder='Enter type of event' name='event' type='text' required defaultValue={event?event.event:""} />
        {data?.errors?.event }


        <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Submitting':'Save'}</button>
      </Form>
      
    </div>
  )
}

export default EventForm

