import React from 'react'
import { Link,useLoaderData ,useRouteLoaderData } from 'react-router-dom';

const EventItem = () => {
    const data = useRouteLoaderData('event-detail');
    console.log(data,"12345678")
   
    //console.log(data?.data?.data,"EventItem");
    //const result = data?.data;
    //console.log(Array.isArray(result),"event_details 1234567")
  return (
    <div>
        <p>Event Item</p>
        <div>{data?.name}</div>
   
        <div>
            <li>{data.event_details}</li>
         <li>
             {data?.name}
         </li>
         <li>{data?.date}</li>
     </div>
     {/* <Link to={}></Link> */}
    </div>
  )
}

export default EventItem
