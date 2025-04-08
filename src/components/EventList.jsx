import React from 'react'

const EventList = (data) => {
  console.log("----4",data);
  return (
    <div>
    {  data?.data.map((item)=>(
        <ul key={item.id}>
            <li>{item.name }</li>
        </ul>
      ))}
    </div>
  )
}

export default EventList
