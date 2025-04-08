

import { Link } from 'react-router-dom'
import EventList from '../components/EventList'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Events = () => {


    const [data, setData] = useState([]);

    const fetchEventDetails = async () => {
        try {
            let res = await axios.get(`https://67eb8191aa794fb3222a78fb.mockapi.io/event`);
            console.log(res?.data, "2345678");
            setData(res?.data)
        } catch (error) {
            console.log("error fetching users", error);
        }
    }

    useEffect(() => {
        fetchEventDetails();
    }, []);
    return (
        <>
        {fetchEventDetails && <EventList data={data} />}
      </>
    )
}

export default Events

