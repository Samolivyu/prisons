import React, { useState } from "react";
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import './Schedule.css'


const Schedule = () => {
    const [selected, setSelected] = useState([]);
    const handleSelect = (date) => {
        const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
        if(isSelected){
            setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
        } else if(selected.length < 3){ 
            setSelected((current) => [...current, date]);
        }
    }

    return(
        <div className="schedulebody">
            <h1>Schedule</h1>
            <div className="Calendar-box">
                <div className="calendar_title">
                    <h3>Calendar</h3>
                </div>
                <Calendar
                classNames={{
                    weekday: 'custom-weekday',
                    day: 'custom-day',
                    monthSwitcher: 'custome-month-switcher',
                    label: 'custom-label',
                    navigation: 'custom-navigation',
                    body: 'custom-body',
                    actions: 'custom-actions',
                    action: 'custom-action',
                    daySelected: 'custom-day-selected',
                    dayDisabled: 'custom-day-disabled',
                }}
                getDayProps={(date) => ({
                    selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
                    onClick: () => handleSelect(date)
                })}
                    static
                    renderDay={(date) => {
                        const day = date.getDate();
                        return (
                            <Indicator size={8} color="red" offset={-2} disabled={day !== 16}>
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
                    </div>
                    <div>
                        <p className="release_dates">Release Date</p>
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
