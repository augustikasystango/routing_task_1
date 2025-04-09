
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
import { loader as eventsLoader } from './pages/Events';
import { loader as eventsDetailLoader } from './pages/EventDetails';
import {action as manipulateEventAction } from './components/EventForm'
import { action as deleteEventAction } from './pages/EventDetails';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'events', element: <EventRoot />,

          children: [
            {
              index: true, element: <Events />,
              loader: eventsLoader,
            },

            {
              path: ':id',
              id:'event-detail',
              loader: eventsDetailLoader,
              children: [
                {
                  index: true, element: <EventDetails />,action:deleteEventAction
                },
                { path: 'edit', element: <EditEvent /> ,action:manipulateEventAction},
              ]

            },

            { path: 'new', element: <NewEvent />,action:manipulateEventAction }
          ]
        }

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
