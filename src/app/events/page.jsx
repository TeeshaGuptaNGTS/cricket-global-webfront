import React from 'react';
import News from '../home/_component/news';
import ProtectedRoute from '@/component/protectroute';
import EventPage from './_component/events1';
import EventList from './_component/events2';


function Event() {
    return (
        <ProtectedRoute>
            {/* <EventList/> */}
            <EventPage />
            <News/>
            </ProtectedRoute>
           
            
       
    );
}

export default Event;