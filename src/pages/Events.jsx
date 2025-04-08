

import { Link, useLoaderData } from 'react-router-dom'
import EventList from '../components/EventList'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Events = () => {

const events = useLoaderData();
console.log(events);


    return (
        <>
        <EventList events={events} />
      </>
    )
}

export default Events

