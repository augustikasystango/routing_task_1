

import { Link, useLoaderData } from 'react-router-dom'
import EventList from '../components/EventList'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Events = () => {
//we can also use loaderdata inside EVentlist to avoid sending props to eventlist through event
// const events = useLoaderData();
//console.log(events);


    return (
        <>
        <EventList  />
      </>
    )
}

export default Events

