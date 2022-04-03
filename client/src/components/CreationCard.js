import classes from "./CreationCard.module.css";
import { useState, useRef, useEffect } from "react";
import Backdrop from "./Backdrop";
import { func } from "prop-types";
// import moment from 'moment';

// MUI
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Stack from "@mui/material/Stack";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
import DatePicker from "@mui/lab/DatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

// const { RangePicker } = DatePicker;


function CreationCard(props){

    // MUI
    // const [timeValue, setTimeValue] = useState<Date | null>(
    //     new Date("2018-01-01T00:00:00.000Z")
    //   );
    // const [dateValue, setDateValue] = useState<Date | null>(null);

    // https://stackoverflow.com/questions/53314857/how-to-focus-something-on-next-render-with-react-hooks
    // const EditableField = () => {
    //     const [isEditing, setEditing] = useState(false);
    //     const toggleEditing = () => {
    //       setEditing(!isEditing);
    //     };
      
    //     const inputRef = useRef(null);
      
    //     useEffect(() => {
    //       if (isEditing) {
    //         inputRef.current.focus();
    //       }
    //     }, [isEditing]);
    // }


  
    let tempPackage = {
        sourceTitle: props.tempData.thisTitle, 
        sourceNote: props.tempData.thisNote, 
        sourceESD: props.tempData.thisESD,
        sourceEED: props.tempData.thisEED,
        sourceEST: props.tempData.thisEST,
        sourceEET: props.tempData.thisEET
    };

    const [title, setTitle] = useState('');
    function handleTitleChange(event){
        // setTitle(event.target.value);
        tempPackage.sourceTitle = event.target.value;
        props.onExpand(tempPackage);
    }
    const [note, setNote] = useState('');
    function handleNoteChange(event){
        // setNote(event.target.value);
        tempPackage.sourceNote = event.target.value
        props.onExpand(tempPackage);
    }

    function submitHandler(event){
        event.preventDefault();
        // Prevent Default from behavior of jumping out of page
        // but to let React handle the data & redirect
    }

    // 在創建方塊開啟時偵測 ESC 按鍵，並回傳功能到 CreationInput 頁面做關閉
    function handleKeyPress(event){
        if(event.key === 'Escape'){
            console.log('ESC Detected! ');
            props.onESC();
          }
    }

    const [startDateValue, setSartDateValue] = useState(new Date());
    function handleESDChange(event){
        setSartDateValue(event);
        tempPackage.sourceESD = event;
        props.onExpand(tempPackage);
        console.log('ESD: ' + event);
    }
    
    const [endDateValue, setEndDateValue] = useState(new Date());
    function handleEEDChange(event){
        setEndDateValue(event);
        tempPackage.sourceEED = event;
        props.onExpand(tempPackage);
        console.log('EED: ' + event);
    }
    
    const [startTimeValue, setStartTimeValue] = useState(new Date());
    function handleESTChange(event){
        setStartTimeValue(event);
        tempPackage.sourceEST = event;
        props.onExpand(tempPackage);
        console.log('EST: ' + event);
    }

    const [endTimeValue, setEndTimeValue] = useState(new Date());
    function handleEETChange(event){
        setEndTimeValue(event);
        tempPackage.sourceEET = event;
        props.onExpand(tempPackage);
        console.log('EET: ' + event);
    }

    return(
        <div className={classes.card} onKeyDown={handleKeyPress} tabIndex="0">
            <form  onSubmit={submitHandler}>

                <input onChange={handleTitleChange} value={props.tempData.thisTitle} className={classes.title} name="title" autoFocus placeholder="Title"></input>
                <button className={classes.trackButton}><img className={classes.stbutton} src={require('../dummy-data/icons/play.png')}></img></button>
                
                <textarea onChange={handleNoteChange} value={props.tempData.thisNote} rows="4" name="description" placeholder="Note"></textarea>
                <AccessAlarmIcon />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                    label="Start Date"
                    value={props.tempData.thisESD}
                    minDate={new Date()}
                    onChange={handleESDChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <DatePicker
                    label="End Date"
                    value={props.tempData.thisEED}
                    minDate={new Date()}
                    onChange={handleEEDChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                    label="Start Time"
                    value={props.tempData.thisEST}
                    onChange={handleESTChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                    label="End Time"
                    value={props.tempData.thisEET}
                    onChange={handleEETChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                
                <div className={classes.container}>

         

                </div>
            </form>
        </div>
    );
}

export default CreationCard;


/* 本頁面用到的補充資料：
 
<input type="date">
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date

<input type="time">
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time

REACT DATEPICKER
https://reactdatepicker.com/
https://www.npmjs.com/package/react-datepicker

React Handle KeyDown Events with <div>
https://stackoverflow.com/questions/43503964/onkeydown-event-not-working-on-divs-in-react

React Dates by AirBNB
https://www.npmjs.com/package/react-dates

Moment to JS Date Object: toDate()
https://momentjs.com/docs/#/displaying/as-javascript-date/

*/








// {ESD && <div>
//     <label htmlFor="esd">Estimated Start Date: </label>
//     <input type="date" id="esd" name="esd" className={classes.properties}></input>
// </div>}
// <img className={classes.icons} onClick={openESD} src={require("../dummy-data/icons/esd.png")}></img>

// {EED && <div>
//     <label htmlFor="eed">Estimated End Date: </label>
//     <input type="date" id="eed" name="eed" className={classes.properties}></input>
// </div>}
// <img className={classes.icons} onClick={openEED} src={require("../dummy-data/icons/asd.png")}></img>

// {EST && <div>
//     <label htmlFor="est">Estimated Start Time:</label>
//     <input type="time" id="est" name="est" className={classes.properties}></input>
// </div>}
// <img className={classes.icons} onClick={openEST} src={require("../dummy-data/icons/est.png")}></img>

// {EET && <div>
//     <label htmlFor="eet">Estimated End Time:</label>
//     <input type="time" id="eet" name="eet" className={classes.properties}></input>
// </div>}
// <img className={classes.icons} onClick={openEET} src={require("../dummy-data/icons/ast.png")}></img>





/* OTHER ATTEMPTS AT FINDING SUITABLE UI LIBRARIES
// import DatePicker from './DatePicker';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import 'antd/dist/antd.css';
// import { TimePicker, ConfigProvider, DatePicker } from 'antd';


Ant Design

<DatePicker 
            placeholder="Start Date"
            onChange={handleESDChange}
            value={props.tempData.thisESD}
        />

        <DatePicker 
            placeholder="End Date"
            onChange={handleEEDChange}
            value={props.tempData.thisEED}
        />

        <TimePicker 
            format="HH:mm"
            onChange={handleESTChange}
            value={props.tempData.thisEST}
            placeholder="Start Time"
            status={props.timeError}
            // onOpenChange
        />
        <TimePicker 
            format="HH:mm"
            onChange={handleEETChange}
            value={props.tempData.thisEET}
            placeholder="End Time"
            status={props.timeError}
        />



*/