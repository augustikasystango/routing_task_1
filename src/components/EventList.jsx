import React from 'react';
import { Link ,useLoaderData} from 'react-router-dom';

const EventList = () => {

  const events = useLoaderData();
 console.log("----4",events);
  return (
    <div>
    { events?.map((item)=>(
        <ul key={item.id}>
            <Link>{item.name }</Link>
        </ul>
      ))}
    </div>
  )
}

export default EventList
