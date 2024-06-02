import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import axios from 'axios'; //Axios has been used for the HTTP requests
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import './Schedule.css'


const Schedule = () => {
    //Initializing the state to hold the selected Dates
    const [selected, setSelected] = useState([]);

    const handleSelect = async (date) => {
       try{
        const existingEvent = events.find((event) => dayjs(date).isSame(event.date, 'date'));

        if(existingEvent) {
            // if date is already selected, delete the event from the database
            await axios.delete(`/api/events/${existingEvent._id}`);
        } else {
            // If date is not selected, create a new event in the database
            const eventType = prompt('Enter event type (urgent, miscellaneous, release date');
            await axios.post('/api/events', { date, type: eventType });
        }

        //Refresh events after CRUD operation
        fetchEvents();
       } catch (error) {
            console.error('Error handling selection:', error);
       }
    };

    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        //Fetch calendar events from backend with component mounts
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/api/events');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    return(
        <div className="schedulebody">
            <h1>Schedule</h1>
            <div className="Calendar-box">
                <div className="calendar_title">
                    <h3>Calendar</h3>
                </div>
                <Calendar
                getDayProps={(date) => ({
                    selected: events.some((event) => dayjs(date).isSame(event.date, 'date')),
                    onClick: () => handleSelect(date)
                })}

                    static
                    renderDay={(date) => {
                        const day = date.getDate();
                        const event = events.find((event) => dayjs(date).isSame(event.date, 'date'));
                        let color = 'blue'; //Default color for no event

                        if (event) {
                            if(event.type === 'urgent') color = 'red';
                            else if (event.type === 'release') color = 'green';
                            else if (event.type === 'miscellaneous') color = 'blue';
                        }

                        return (
                            <Indicator size={8} color={color} offset={-2}>
                                <div className="dayContainer">{day}</div>
                            </Indicator>
                        );
                    }}
                />
            </div>

            <div>
                <div className="notification_box_container">
                    <h3>Notifications</h3>
                    <div>
                        <p className="high-priority">High Priority</p>
                        {/*v-for for the high priority notificatons */}
                        <ul>
                        {events.filter((event) => event.type === 'urgent').map(event => (
                            <li key={event._id}>{dayjs(event.date).format('YYYY-MM-DD')}</li>
                        ))}
                        </ul>
                    </div>

                    <div>
                        <p className="release_dates">Release Date</p>
                        {/*v-for for the release dates */}
                        <ul>
                         {events.filter((event) => event.type === 'release').map(event => (
                            <li key={event._id}>{dayjs(event.date).format('YYYY-MM-DD')}</li>
                         ))}
                        </ul>
                    </div>

                    <div>
                        <p className="miscellaneous">Miscellaneous</p>
                        {/*v-for for the miscellaneous notfications */}
                        <ul>
                         {events.filter((event) => event.type ==='miscellaneous').map(event => (
                            <li key={event._id}>{dayjs(event.date).format('YYYY-MM-DD')}</li>
                         ))}
                        </ul>
                    </div>
                </div>  
            </div>
        </div>
    ); 
};

export default Schedule;
