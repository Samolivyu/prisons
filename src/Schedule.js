import React from "react";
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import './Schedule.css'


const Schedule = () => {

    return(
        <div className="schedulebody">
            <h1>Schedule</h1>
            <div className="Calendar-box">
                <div className="calendar_title">
                    <h3>Calendar</h3>
                </div>
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