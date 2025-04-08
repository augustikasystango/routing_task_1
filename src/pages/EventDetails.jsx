import React from 'react'
import { useRouteLoaderData, useParams } from 'react-router-dom'
import EventItem from '../components/EventItem';
import axios from 'axios';


const EventDetails = () => {
    const params = useParams();
    const data = useRouteLoaderData('event-detail');
    // console.log(params.id);
    // console.log("---inside details")
    // console.log(data);
  return (
    <div>
      EventDetails
       <EventItem  data={data}/>
    </div>
  )
}

export default EventDetails;


export const loader=async({params})=>{
  const id = params.id;
  console.log(id,"-----------25")
  try{
    const response = await axios.get(`https://67eb8191aa794fb3222a78fb.mockapi.io/event/${id}`);
    console.log(response?.data,"123456789");
    return response?.data;
    

  }catch(error)   
  {
    console.log("Error",error);
  }
}