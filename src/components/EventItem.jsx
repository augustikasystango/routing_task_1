import React from 'react'
import { Link,NavLink,useLoaderData ,useNavigation,useRouteLoaderData ,useSubmit} from 'react-router-dom';


const EventItem = () => {
    const data = useRouteLoaderData('event-detail');
    console.log(data,"12345678")
   const submit = useSubmit();
   const navigation  = useNavigation();
   const isDeleting = navigation.state="Deleting";

     const startDeleteHandler=()=>{
      const proceed = window.confirm("Are you sure ?");
      if(proceed)
      {
          submit(null,{method:'delete'})
      }
     }
    
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
     <menu>
      <NavLink to="edit">Edit</NavLink>
      <button onClick={startDeleteHandler}>{isDeleting?"Delete":"Deleting"}</button>
     </menu>
     
    </div>
  )
}

export default EventItem
