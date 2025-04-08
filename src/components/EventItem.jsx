import React from 'react'

const EventItem = (data) => {
    console.log("---data");
    console.log(data?.data);
    const result = data?.data;
  return (
    <div>
      {
        result?.data?.data.map((item)=>(
            <div key={item.id}>
                <li>{item.event}</li>
                <li>
                    {item.name}
                </li>
                <li>{item.date}</li>
            </div>
        ))
      }
    </div>
  )
}

export default EventItem
