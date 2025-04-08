
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainNavigation from './components/MainNavigation';
import Home from './pages/Home';
import NewEvent from './pages/NewEvent';
import Events from './pages/Events';
import EditEvent from './pages/EditEvent';
import EventDetails from './pages/EventDetails';
import ErrorPage from './pages/ErrorPage';
import EventRoot from './components/EventRoot';
import axios from 'axios';

function App() {
   const router = createBrowserRouter([
   { path:"/",
    element:<MainNavigation/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true , element:<Home/>},
      {path:'events',element:<EventRoot/>,
        // loader:async()=>{
        //   try{
        //     let res = await axios.get(`https://67eb8191aa794fb3222a78fb.mockapi.io/event`)
        //     return res?.data;}
        //     catch(error)
        //     {
        //       console.log(`Error0`,error)
        //     }
          
        // },
        children:[
        {index:true,element:<Events/>},
        {path:':id',element:<EventDetails/>},
        {path:':id/edit',element:<EditEvent/>},
        {path:'new' ,element:<NewEvent/>}
      ]}
     
    ]
   }
   ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
