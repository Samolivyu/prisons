import React from "react";
<<<<<<< HEAD
// import Calendar from './SchedulePageComponents/Calendar';
=======
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';
>>>>>>> dd5781916bf168649dfbaa986a05b75eef8aa9d6
import './Schedule.css'


const Schedule = () => {

    return(
        <div className="schedulebody">
            <h1>Schedule</h1>
            <div className="Calendar-box">
                <div className="calendar_title">
                    <h3>Calendar</h3>
                </div>
<<<<<<< HEAD
                {/* <Calendar/> */}
=======
                <Calendar
                    static
                    renderDay={(date) => {
                        const day = date.getDate();
                        return (
                            <Indicator size={8} color="red" offset={-2} disabled={day !== 16}>
                                <div>{day}</div>
                            </Indicator>
                        );
                    }}
                />
>>>>>>> dd5781916bf168649dfbaa986a05b75eef8aa9d6
            </div>

            <div>
                <div className="notification_box_container">
                    <h3>Notifications</h3>
                    <div>
                        <p className="high-priority">High Priority</p>
                        {/*v-for for the high priority notificatons */}
                    </div>
                    <div>
                        <p className="release_dates">Release Datse</p>
                        {/*v-for for the release dates */}
                    </div>
                    <div>
                        <p className="miscellaneous">Miscellaneous</p>
                        {/*v-for for the miscellaneous notfications */}
                    </div>
                </div>  
            </div>
        </div>
    ); 
};

export default Schedule;