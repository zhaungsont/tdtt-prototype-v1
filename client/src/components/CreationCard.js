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

let tempPackage = {
    sourceTitle: '', 
    sourceNote: '', 
    sourceESD: null,
    sourceEED: null,
    sourceEST: null,
    sourceEET: null,
    sourceED: '',
    sourceCat: '',
    sourceLoc: ''
};

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

function CreationCard(props){
    const [titleValue, setTitle] = useState('');
    const [noteValue, setNote] = useState('');
    const [startDateValue, setSartDateValue] = useState(new Date());
    const [endDateValue, setEndDateValue] = useState(new Date());
    const [startTimeValue, setStartTimeValue] = useState(null);
    const [durValue, setDurValue] = useState('');
    const [endTimeValue, setEndTimeValue] = useState(null);
    
    const [currentCat, setCurrentCat] = useState('');
    const [newCatValue, setNewCatValue] = useState('');
    const [newCatExpand, setNewCatExpand] = useState(false)

    const [currentLoc, setCurrentLoc] = useState('');
    const [newLocValue, setNewLocValue] = useState('');
    const [newLocExpand, setNewLocExpand] = useState(false)

    const [dateError, setDateError] = useState(false);
    const [timeError, setTimeError] = useState(false);

    // Handles "Submit & Time Track"
    function submitHandler(event){
        event.preventDefault();
        // Prevent Default from behavior of jumping out of page
        // but to let React handle the data & redirect


        // Here, we'll handle situation where user clicks on "track" button
        // the tempPackage is already sent to CreationInput.js
        // now we just bring the data (draftTask) along 
        // and redirect user to /timetrack page.
        // we'll handle timetrack logic & data transmission over there.
        
    }
    // 在創建方塊開啟時偵測 ESC 按鍵，並回傳功能到 CreationInput 頁面做關閉
    function handleESCPress(event){
        if(event.key === 'Escape'){
            console.log('ESC Detected! ');
            props.onESC();
          }
    }

    function handleTitleChange(event){
        setTitle(event.target.value);
        tempPackage.sourceTitle = event.target.value;
        props.onUpdateCC(tempPackage);
    }
    function handleNoteChange(event){
        setNote(event.target.value);
        tempPackage.sourceNote = event.target.value
        props.onUpdateCC(tempPackage);
    }
    function handleEnterPress(event){
        if (event.key === "Enter"){
            console.log('Entered!');
            props.onSubmitTask()
        }
    }
    function handleESDChange(event){
        event.setHours(0);
        event.setMinutes(0);
        event.setSeconds(0);
        setSartDateValue(event);
        tempPackage.sourceESD = event;
        props.onUpdateCC(tempPackage);
        console.log('startDateValue: ' + event);
    }
    function handleEEDChange(event){
        event.setHours(23);
        event.setMinutes(59);
        event.setSeconds(59);
        setEndDateValue(event);
        tempPackage.sourceEED = event;
        props.onUpdateCC(tempPackage);
        console.log('endDateValue: ' + event);
    }
    function handleESTChange(event){
        setStartTimeValue(event);
        tempPackage.sourceEST = event;
        props.onUpdateCC(tempPackage);
        console.log('startTimeValue: ' + event);

        handleEETChange(durValue);
    }   
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
                props.onUpdateCC(tempPackage);
            }
        }
    }
    function handleDurChange(event){

        if (!event.target.value) {
            setEndTimeValue(null);
            setDurValue(event.target.value)
        } else if (!isNaN(event.target.value)){
            const duration = Number(event.target.value);
            setDurValue(event.target.value);
            handleEETChange(duration)
            tempPackage.sourceED = duration;
            props.onUpdateCC(tempPackage);
        } 
    }
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
    function handleCatSelectChange(event){
        const catName = event.target.value;
        setCurrentCat(catName);
        if (catName == "New Category..."){
            console.log('fire new cat!');
            setNewCatExpand(true);
        } else {
            console.log('no fire! collapse!');
            setNewCatExpand(false);
            tempPackage.sourceCat = catName;
            props.onUpdateCC(tempPackage);
        }
    };
    function newCatInputHandler(event){
        const catName = event.target.value;
        const val = catName;
        setNewCatValue(val);
        tempPackage.sourceCat = catName;
        props.onUpdateCC(tempPackage);
    }
    function cancelNewCatHandler(){
        if (!newCatValue) {

            setCurrentCat('');
            setNewCatExpand(false);
            tempPackage.sourceCat = '';
            props.onUpdateCC(tempPackage);
        }
    }
    function handleLocSelectChange(event) {
        const locName = event.target.value;
        setCurrentLoc(locName);
        if (locName == "New Location..."){
            console.log('fire new Loc!');
            setNewLocExpand(true);
        } else {
            console.log('no fire! collapse!');
            setNewLocExpand(false);
            tempPackage.sourceCat = locName;
            props.onUpdateCC(tempPackage);
        }
    };
    function newLocInputHandler(event){
        const locName = event.target.value
        setNewLocValue(locName);
        tempPackage.sourceLoc = locName;
        props.onUpdateCC(tempPackage);
    }
    function cancelNewLocHandler(){
        if (!newLocValue) {

            setCurrentLoc('');
            setNewLocExpand(false);
            tempPackage.sourceLoc = '';
            props.onUpdateCC(tempPackage);      
        }
    }

    return(
        <div className={classes.card} onKeyDown={(event)=>{handleESCPress(event); handleEnterPress(event)}} tabIndex="0">
            <form  onSubmit={submitHandler}>
                <div className={classes.titleButtonContainer}>
                <input onChange={handleTitleChange} value={titleValue} className={classes.title} name="title" autoFocus placeholder="Press esc to cancel..."></input>
                <div className={classes.spacer}></div>
                <img className={classes.stbutton} src={require('../dummy-data/icons/play.png')}></img>
                </div>

                <textarea onChange={handleNoteChange} value={noteValue} rows="4" name="description" placeholder="Note"></textarea>

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
                    <div className={classes.divider}></div>
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
                    
                    <div className={classes.divider}></div>

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

                    <div className={classes.divider}></div>

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

                    <div className={classes.divider}></div>

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

                    <div className={classes.divider}></div>

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
                    autoFocus
                    size="small"
                    label={"New Category"}
                    // helperText="Some important text"
                    value={newCatValue}
                    onChange={newCatInputHandler}
                    type="search"
                    onBlur={cancelNewCatHandler}
                    sx={{ maxWidth: 115 }}
                    />}

                    <div className={classes.divider}></div>

                    {/* LOCATION SELECT */}
                    {!newLocExpand && <FormControl 
                    size='small' 
                    variant="outlined" 
                    sx={{ minWidth: 115 }}>
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
                    autoFocus
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
