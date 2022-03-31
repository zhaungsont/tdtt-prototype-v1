import React, { useState, useEffect  } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

function Datepicker(props) {

    const [dateRange, setdateRange] = useState({
        startDate: null,
        endDate: null
    });
    const [focus, setFocus] = useState(null);

    const { startDate, endDate } = dateRange;

    const handleOnDateChange = (startDate, endDate) =>
        setdateRange(startDate, endDate);

        useEffect(()=>{
            const identifier = setTimeout(()=>{
            // console.log('pass date');
                const data = { std: startDate, ed: endDate }
                props.onUpdate(data);
            }, 500);
        
            return ()=>{
            // console.log('CLEAN UP!');
            clearTimeout(identifier);
            }
            
        }, [startDate, endDate])
        

    return (
        <DateRangePicker
            // startDatePlaceholderText="Start"
            startDate={startDate}
            onDatesChange={handleOnDateChange}
            // endDatePlaceholderText="End"
            endDate={endDate}
            numberOfMonths={1}
            displayFormat="MMM D"
            showClearDates={true}
            focusedInput={focus}
            onFocusChange={focus => setFocus(focus)}
            startDateId="startDateMookh"
            endDateId="endDateMookh"
            minimumNights={0}
            small={true}
        />
    );
    }

export default Datepicker;


/*
React-Dates Functional Component
https://github.com/react-dates/react-dates/issues/1785



*/