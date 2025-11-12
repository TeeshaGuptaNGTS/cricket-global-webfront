import React from 'react';
import EventList from './_component/events1';
import EventPage from './_component/events2';
import News from '../home/_component/news';
import ProtectedRoute from '@/component/protectroute';


function Event() {
    return (
        <ProtectedRoute>
            <EventList/>
            <News/>
            </ProtectedRoute>
           
            
       
    );
}

export default Event;