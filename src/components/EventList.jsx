import React from 'react';
import { Link } from 'react-router-dom';

const EventList = (events) => {
 // console.log("----4",data);
  return (
    <div>
    { events?.events?.map((item)=>(
        <ul key={item.id}>
            <Link>{item.name }</Link>
        </ul>
      ))}
    </div>
  )
}

export default EventList
