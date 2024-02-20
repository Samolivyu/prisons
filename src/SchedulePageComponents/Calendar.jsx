import { Component } from 'react';
import BpkCalendar , {
    CALENDAR_SELECTION_TYPE, 
} from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, {
    INPUT_TYPES,
} from '@skyscanner/backpack-wen/bpk-component-input';
import format from 'date-fns/format';

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');

const daysOfWeek = [
    {name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
    },

    {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
    },

    {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    index: 2,
    isWeekend: false,
    },

    {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
    },

    {name: 'Thursday',
    nameAbbr: 'Thur',
    index: 4,
    isWeekend: false,
    },

    {name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
    },

    {name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
    }, 
];

export default class App extends Component{
    constructor(){
        super();

        this.state = {
            selectionConfiguration: {
                type: CALENDAR_SELECTION_TYPE.single,
                date: null,
            },
        };
    }

    handleDateSelect = (date) => {
        this.setState({
            selectionConfiguration: {
                type: this.props.selectionsConfiguration.type,
                date: date,
            },
        });
    };

    render() {
        return (
            <div>
                <BpkInput

                id="dateInput"
                type={INPUT_TYPES.text}
                name="date"
                value={(this.state.selectionConfiguration.date || '').toString()}
                placeholder="Departure date"
                
                />

                <BpkCalendar

                id="calendar"
                onDateSelect={this.handleDateSelect}
                formatMonth={formatMonth}
                formatDateFull={formatDateFull}
                daysOfWeek={daysOfWeek}
                weekStartsOn={1}
                changeMonthLabel="Change month"
                nextMonthLabel="Next month"
                previousMonthLabel="Previous month"
                selectionConfiguration={this.state.selectionConfiguration}
                
                />
            </div>
        );
    }
}