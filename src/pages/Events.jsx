

import { Link, useLoaderData } from 'react-router-dom'
import EventList from '../components/EventList'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Events = () => {
//we can also use loaderdata inside EVentlist to avoid sending props to eventlist through event
 const events = useLoaderData();
console.log(events);


    return (
        <>
        <EventList events={events} />
      </>
    )
}

export default Events;

export const loader=async()=>{
    try {
        let res = await axios.get(`https://67eb8191aa794fb3222a78fb.mockapi.io/event`);
        // console.log(res?.data, "2345678");
        // setData(res?.data)
        return res?.data;
    } catch (error) {
        console.log("error fetching users", error);
    }
}

