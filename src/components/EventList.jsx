import React from 'react';
import { Link ,useLoaderData} from 'react-router-dom';

const EventList = (events) => {

  //const events = useLoaderData();
 //console.log("----4",events);
  return (
    <div>
    { events?.events?.map((item)=>(
        <ul key={item.id}>
            <Link to={item.id}>{item.name }</Link>
        </ul>
      ))}
    </div>
  )
}

export default EventList
