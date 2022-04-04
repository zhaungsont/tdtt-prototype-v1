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
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import FormHelperText from '@mui/material/FormHelperText';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';


// const { RangePicker } = DatePicker;



function CreationCard(props){

    const dummyCat = [
        {
            key: 0,
            val: 'Study Python',
            catName: 'Study Python'
        },
        {
            key: 1,
            val: 'Buy PS5',
            catName: 'Buy PS5'
        }
    ];
    const dummyLoc = [
        {
            key: 0,
            val: 'Louisa',
            catName: 'Louisa'
        },
        {
            key: 1,
            val: 'Taipei',
            catName: 'Taipei'
        }
    ];

  
    let tempPackage = {
        sourceTitle: props.tempData.thisTitle, 
        sourceNote: props.tempData.thisNote, 
        sourceESD: props.tempData.thisESD,
        sourceEED: props.tempData.thisEED,
        sourceEST: props.tempData.thisEST,
        sourceEET: props.tempData.thisEET,
        sourceED: props.tempData.thisED
    };

    const [title, setTitle] = useState('');
    function handleTitleChange(event){
        setTitle(event.target.value);
        tempPackage.sourceTitle = event.target.value;
        // props.onExpand(tempPackage);
    }
    const [note, setNote] = useState('');
    function handleNoteChange(event){
        setNote(event.target.value);
        tempPackage.sourceNote = event.target.value
        // props.onExpand(tempPackage);
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
        event.setHours(0);
        event.setMinutes(0);
        event.setSeconds(0);
        setSartDateValue(event);
        tempPackage.sourceESD = event;
        // props.onExpand(tempPackage);
        console.log('startDateValue: ' + event);
    }
    
    const [endDateValue, setEndDateValue] = useState(new Date());
    function handleEEDChange(event){
        event.setHours(23);
        event.setMinutes(59);
        event.setSeconds(59);
        setEndDateValue(event);
        tempPackage.sourceEED = event;
        // props.onExpand(tempPackage);
        console.log('endDateValue: ' + event);
    }
    
    const [startTimeValue, setStartTimeValue] = useState(null);
    function handleESTChange(event){
        setStartTimeValue(event);
        tempPackage.sourceEST = event;
        // props.onExpand(tempPackage);
        console.log('startTimeValue: ' + event);

        handleEETChange(durValue);
    }   

    const [endTimeValue, setEndTimeValue] = useState(null);
    function handleEETChange(duration){

        // const hourDuration = Math.floor(duration/60);
        // console.log('hour: ' + hourDuration);
        // const minDuation = duration % 60;
        // console.log('minute: ' + minDuation);
        if (startTimeValue){
            if (duration) {

                const addedTime = duration * 60000;
                tempPackage.sourceEET = new Date(startTimeValue.getTime() + addedTime);
                setEndTimeValue(tempPackage.sourceEET);
            }
        }
        
        // tempPackage.sourceEET = event;
        // props.onExpand(tempPackage);
        // console.log('endTimeValue: ' + event);
    }



    const [durValue, setDurValue] = useState('');

    function handleDurChange(event){

        if (!event.target.value) {
            setEndTimeValue(null);
            setDurValue(event.target.value)
        } else if (!isNaN(event.target.value)){
            const duration = Number(event.target.value);
            setDurValue(event.target.value);
            handleEETChange(duration)
        } 
    }

    
    const [dateError, setDateError] = useState(false);
    const [timeError, setTimeError] = useState(false);
    useEffect(()=>{

        // DATE Validation
        if (startDateValue == endDateValue){
            // do nothing.
            // this field prevents the two same dates being deemed invalid by js
        } else if (startDateValue != null && endDateValue != null && startDateValue > endDateValue){
            console.log('ERROR! Start Date is later than End Date!');
            setDateError(true)
        } else {
            setDateError(false);
        }


        // TIME Validation
        if (startDateValue == endDateValue) {
            // the start date and the end date are the same
            // this could either mean:
            // 1. the user has no start or end date
            // 2. the user set start and end date on the same day
            // either way, we NEED TO VALIDATE the TIME
            if (startTimeValue != null && endTimeValue != null && startTimeValue > endTimeValue){
                // the user has input both starting & ending time
                // the starting time is LATER than ending time
                console.log('ERROR! Start Time is later than End Time!');
                setTimeError(true);
            } else {
                // the user either has only start time or end time,
                // or the start time is earlier than end time.
                // either way, this is valid.
                setTimeError(false);
            }
        }
    
    }, [startDateValue, endDateValue, startTimeValue, endTimeValue]);

    const [currentCat, setCurrentCat] = useState('');
    const [newCatExpand, setNewCatExpand] = useState(false)

    const handleCatSelectChange = (event) => {
        setCurrentCat(event.target.value);
        if (event.target.value == "New Category..."){
            console.log('fire new cat!');
            setNewCatExpand(true);
        } else {
            console.log('no fire! collapse!');
            setNewCatExpand(false);
        }
    };

    const [newCatValue, setNewCatValue] = useState('');
    function newCatInputHandler(event){
        const val = event.target.value
        setNewCatValue(val);
    }

    function cancelNewCatHandler(){
        if (!newCatValue) {

            setCurrentCat('');
            setNewCatExpand(false);
        }
    }

    const [currentLoc, setCurrentLoc] = useState('');
    const [newLocExpand, setNewLocExpand] = useState(false)

    const handleLocSelectChange = (event) => {
        setCurrentLoc(event.target.value);
        if (event.target.value == "New Location..."){
            console.log('fire new Loc!');
            setNewLocExpand(true);
        } else {
            console.log('no fire! collapse!');
            setNewLocExpand(false);
        }
    };

    const [newLocValue, setNewLocValue] = useState('');
    function newLocInputHandler(event){
        const val = event.target.value
        setNewLocValue(val);
    }

    function cancelNewLocHandler(){
        if (!newLocValue) {

            setCurrentLoc('');
            setNewLocExpand(false);
        }
    }

    return(
        <div className={classes.card} onKeyDown={handleKeyPress} tabIndex="0">
            <form  onSubmit={submitHandler}>
                <div className={classes.titleButtonContainer}>
                <input onChange={handleTitleChange} value={title} className={classes.title} name="title" autoFocus placeholder="Press esc to cancel..."></input>
                <div className={classes.spacer}></div>
                <img className={classes.stbutton} src={require('../dummy-data/icons/play.png')}></img>
                </div>

                <textarea onChange={handleNoteChange} value={note} rows="4" name="description" placeholder="Note"></textarea>

                <div className={classes.container}>
                <div className={classes.spacer}></div>
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>

                    <MobileDatePicker
                    label="Start Date"
                    value={startDateValue}
                    minDate={new Date()}
                    onChange={handleESDChange}
                    renderInput={(params) => 
                        <TextField 
                            {...params} 
                            error={props.dateError}
                            helperText={props.dateError && "Invalid Format"}
                            size="small"
                            sx={{ maxWidth: 115 }}
                        />} 
                    // InputAdornmentProps={{ position: "start" }}
                    />
                    
                    <MobileDatePicker
                    label="End Date"
                    value={endDateValue}
                    minDate={new Date()}
                    onChange={handleEEDChange}
                    renderInput={(params) => 
                        <TextField 
                            {...params} 
                            error={dateError}
                            helperText={dateError && "Invalid Format"}
                            size="small"
                            sx={{ maxWidth: 115 }}
                        />} 
                    />

                    {/* START TIME */}
                    <MobileTimePicker
                    label="Start Time"
                    minutesStep={5}
                    value={startTimeValue}
                    onChange={handleESTChange}
                    renderInput={(params) => 
                        <TextField 
                            {...params} 
                            error={timeError}
                            helperText={timeError && "Invalid Format"}
                            size="small"
                            sx={{ maxWidth: 115 }}
                        />} 
                    />

                    {/* DURATION */}
                    <TextField 
                        label="Duration in Mins" 
                        color="primary" 
                        size="small"
                        // onBlur={durationValidator}
                        onChange={handleDurChange}
                        value={durValue}
                        sx={{ maxWidth: 115 }}
                    />
                    
                    {/* END TIME */}
                    <MobileTimePicker
                    autoWidth={true}
                    disabled={true}
                    label="End Time"
                    minutesStep={5}
                    value={endTimeValue}
                    onChange={()=>{}}
                    renderInput={(params) => 
                        <TextField 
                            {...params} 
                            error={timeError}
                            helperText={timeError && "Invalid Format"}
                            size="small"
                            sx={{ maxWidth: 115 }}
                        />}                    
                    />

                    {/* CATEGORY SELECT */}
                    {!newCatExpand && <FormControl size='small' variant="outlined" sx={{ minWidth: 115 }}>
                        <InputLabel>Category</InputLabel>
                        <Select
                        value={currentCat}
                        onChange={handleCatSelectChange}
                        label="Category"
                        autoWidth
                        >

                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        
                        {dummyCat.map((cat)=>(
                            <MenuItem key={cat.key} value={cat.val}>{cat.catName}</MenuItem>
                        ))}
                        <MenuItem value="New Category..."><span style={{color: 'grey'}}>New Category...</span></MenuItem>
                        </Select>
                    </FormControl>}
                    
                    {/* CATEGORY INPUT */}
                    {newCatExpand && <TextField
                    focused
                    size="small"
                    label={"New Category"}
                    // helperText="Some important text"
                    value={newCatValue}
                    onChange={newCatInputHandler}
                    type="search"
                    onBlur={cancelNewCatHandler}
                    sx={{ maxWidth: 115 }}
                    />}

                    {/* LOCATION SELECT */}
                    {!newLocExpand && <FormControl size='small' variant="outlined" sx={{ minWidth: 115 }}>
                        <InputLabel>Location</InputLabel>
                        <Select
                        value={currentLoc}
                        onChange={handleLocSelectChange}
                        label="Location"
                        autoWidth
                        >

                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        
                        {dummyLoc.map((loc)=>(
                            <MenuItem key={loc.key} value={loc.val}>{loc.catName}</MenuItem>
                        ))}
                        <MenuItem value="New Location..."><span style={{color: 'grey'}}>New Location...</span></MenuItem>
                        </Select>
                    </FormControl>}
                    
                    {/* LOCATION INPUT */}
                    {newLocExpand && <TextField
                    focused
                    size="small"
                    label={"New Location"}
                    // helperText="Some important text"
                    value={newLocValue}
                    onChange={newLocInputHandler}
                    type="search"
                    onBlur={cancelNewLocHandler}
                    sx={{ maxWidth: 115 }}
                    />}
                </LocalizationProvider>

                    

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



*/
