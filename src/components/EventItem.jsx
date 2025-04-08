import React from 'react'

const EventItem = (data) => {
    console.log("---event item data");
    console.log(data?.data,"EventItem");
    const result = data?.data;
    console.log(Array.isArray(result),"event_details 1234567")
  return (
    <div>
        <p>Event Item</p>
        <div>{result?.data?.data?.name}</div>
   
        <div>
            <li>{data?.data.event_details}</li>
         <li>
             {data?.data.name}
         </li>
         <li>{data?.data.date}</li>
     </div>
    </div>
  )
}

export default EventItem
