import React from 'react';
import { useState } from 'react';
import { Form, useNavigation, useActionData } from 'react-router-dom';
import axios from 'axios';

import { redirect } from 'react-router-dom';

const EventForm = ({ method, event }) => {
  const navigation = useNavigation();
  const data = useActionData();
  const isSubmitting = navigation.state === 'submitting';


  return (
    <div>
      <Form method={method}>

        <input placeholder='Enter your name' name='name' type='text' required defaultValue={event ? event.name : ""} />
        {data?.errors?.name}


        <input placeholder='Enter date of event' name='date' type='date' required defaultValue={event ? event.date : ""} />
        {data?.errors?.date}

        <input placeholder='Enter event details' name='event_details' type='text' required defaultValue={event ? event.event_details : ""} />
        {data?.errors?.event_details}

        <input placeholder='Enter type of event' name='event' type='text' required defaultValue={event ? event.event : ""} />
        {data?.errors?.event}


        <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Save'}</button>
      </Form>

    </div>
  )
}

export default EventForm;

export async function action({ request, params }) {
  const method = request.method;

  //action for validating errors
  console.log("inside new action-------", request);
  const formdata = await request.formData();
  const name = formdata.get('name');
  const date = formdata.get('date');
  const event = formdata.get('event');
  const event_details = formdata.get('event_details');

  const errors = {};
  if (!name || name.length < 3) {
    errors.name = "Enter a valid name.It must be more than 3 characters."
  }
  if (!date) {
    errors.date = "Enter a valid date"
  }
  if (!event) {
    errors.event = "ENter event name"
  }
  if (!event_details || event_details.length < 10) {
    errors.event_details = "Enter event details , more than 10 characters"
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }




  try {

       const eventData = {
     
      date,event, event_details,name
    }
    if (method === 'POST') {
      const res = await axios.post(
        `https://67eb8191aa794fb3222a78fb.mockapi.io/event`,
        eventData
      );
      console.log(res, "POST response");
      if (res.status === 201 || res.status === 200) {
        return redirect('/events');
      }

    } else if (method === 'PATCH') {
      const id = params.id;
      const res = await axios.put(
        `https://67eb8191aa794fb3222a78fb.mockapi.io/event/${id}`,
       eventData
      );
      console.log(res.data, "PATCH response");
      if (res.status === 200) {
        return redirect('/events');
      }
    } else {
      return { errors: { form: "Unsupported method" } };
    }
  } catch (error) {
    console.log("Error submitting form data", error);
    return { errors: { form: "Something went wrong. Please try again!" } };
  }

}


