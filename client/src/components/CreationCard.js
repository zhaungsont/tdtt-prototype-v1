import classes from "./CreationCard.module.css";

import newTaskContext from "../store/NewTaskContext";

import { useState, useEffect, useContext } from "react";
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
    const [tempPackage, setTempPackage] = useState(
        {
            sourceTitle: '', 
            sourceNote: '', 
            sourceESD: null,
            sourceEED: null,
            sourceEST: null,
            sourceEET: null,
            sourceED: '',
            sourceCat: '',
            sourceLoc: '',
            invalidDate: null
        }
    )
//     let tempPackage = {
//     sourceTitle: '', 
//     sourceNote: '', 
//     sourceESD: null,
//     sourceEED: null,
//     sourceEST: null,
//     sourceEET: null,
//     sourceED: '',
//     sourceCat: '',
//     sourceLoc: '',
//     invalidDate: null
// };
    const newTaskCTX = useContext(newTaskContext);

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
        // setTitle(event.target.value);
        // tempPackage.sourceTitle = event.target.value;
        setTempPackage({...tempPackage, sourceTitle: event.target.value})
        props.onUpdateCC(tempPackage);
    }
    function handleNoteChange(event){
        // setNote(event.target.value);
        // tempPackage.sourceNote = event.target.value;
        setTempPackage({...tempPackage, sourceNote: event.target.value})
        props.onUpdateCC(tempPackage);
    }
    function handleEnterPress(event){
        if (event.key === "Enter"){
            if (tempPackage.sourceTitle){
                props.onSubmitTask();
                console.log(tempPackage);
            }
            // props.onESC();
        }
    }


    function handleESDChange(event){
        event.setHours(0);
        event.setMinutes(0);
        event.setSeconds(0);
        // setSartDateValue(event);
        // tempPackage.sourceESD = event;
        setTempPackage({...tempPackage, sourceESD: event})
        props.onUpdateCC(tempPackage);
    }
    function handleEEDChange(event){
        event.setHours(23);
        event.setMinutes(59);
        event.setSeconds(59);
        // setEndDateValue(event);
        // tempPackage.sourceEED = event;
        setTempPackage({...tempPackage, sourceEED: event})
        props.onUpdateCC(tempPackage);
    }
    function handleESTChange(event){
        // setStartTimeValue(event);
        // tempPackage.sourceEST = event;
        setTempPackage({...tempPackage, sourceEST: event})
        props.onUpdateCC(tempPackage);

        handleEETChange(tempPackage.sourceED);
    }   
    function handleEETChange(duration){
        if (tempPackage.sourceEST){
            if (duration) {
                const addedTime = duration * 60000;
                // tempPackage.sourceEET = new Date(startTimeValue.getTime() + addedTime);
                const newEET = new Date(tempPackage.sourceEST.getTime() + addedTime);
                setTempPackage({...tempPackage, sourceEET: newEET})

                // setEndTimeValue(tempPackage.sourceEET);
                props.onUpdateCC(tempPackage);
            }
        }
    }
    function handleDurChange(event){
        if (!event.target.value) {
            // setEndTimeValue(null);
            setTempPackage({...tempPackage, sourceEET: null})

            // setDurValue(event.target.value)
            setTempPackage({...tempPackage, sourceED: event.target.value})
            // props.onUpdateCC(tempPackage);
        } else if (!isNaN(event.target.value)){
            const duration = Number(event.target.value);
            // setDurValue(event.target.value);
            handleEETChange(duration)
            // tempPackage.sourceED = duration;
            setTempPackage({...tempPackage, sourceED: duration})
            // props.onUpdateCC(tempPackage);
        } 
        props.onUpdateCC(tempPackage);
    }
    useEffect(()=>{
        // DATE Validation
        if (tempPackage.sourceESD == tempPackage.sourceEED){
            // do nothing.
            // this field prevents the two same dates being deemed invalid by js
        } else if (tempPackage.sourceESD != null && tempPackage.sourceEED != null && tempPackage.sourceESD > tempPackage.sourceEED){
            console.log('ERROR! Start Date is later than End Date!');
            setDateError(true)
            // tempPackage.invalidDate = true;
            setTempPackage({...tempPackage, invalidDate: true})
        } else {
            setDateError(false);
            // tempPackage.invalidDate = false;
            setTempPackage({...tempPackage, invalidDate: false})

        }


        // TIME Validation
        if (tempPackage.sourceESD == tempPackage.sourceEED) {
            // the start date and the end date are the same
            // this could either mean:
            // 1. the user has no start or end date
            // 2. the user set start and end date on the same day
            // either way, we NEED TO VALIDATE the TIME
            if (tempPackage.sourceEST != null && tempPackage.sourceEET != null && tempPackage.sourceEST > tempPackage.sourceEET){
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
        props.onUpdateCC(tempPackage);
    
    }, [tempPackage.sourceESD, tempPackage.sourceEED, tempPackage.sourceEST, tempPackage.sourceEET]);


    function handleCatSelectChange(event){
        const catName = event.target.value;
        // setCurrentCat(catName);

        if (catName == "New Category..."){
            setTempPackage({...tempPackage, sourceCat: ''})
            setNewCatExpand(true);
        } else {
            setNewCatExpand(false);
            // tempPackage.sourceCat = catName;
            setTempPackage({...tempPackage, sourceCat: catName})
            props.onUpdateCC(tempPackage);
        }
        props.onUpdateCC(tempPackage);
    };
    function newCatInputHandler(event){
        const catName = event.target.value;
        setTempPackage({...tempPackage, sourceCat: catName})

        props.onUpdateCC(tempPackage);
    }
    function cancelNewCatHandler(){
        if (!tempPackage.sourceCat) {
            setNewCatExpand(false);
            props.onUpdateCC(tempPackage);
        }
    }
    function handleLocSelectChange(event) {
        const locName = event.target.value;

        if (locName == "New Location..."){
            setTempPackage({...tempPackage, sourceLoc: ''});

            setNewLocExpand(true);
        } else {
            setNewLocExpand(false);
            setTempPackage({...tempPackage, sourceLoc: locName})

        }
        props.onUpdateCC(tempPackage);
    };
    function newLocInputHandler(event){
        const locName = event.target.value
        setTempPackage({...tempPackage, sourceLoc: locName})

        props.onUpdateCC(tempPackage);
    }
    function cancelNewLocHandler(){
        if (!tempPackage.sourceLoc) {
            setNewLocExpand(false);
            setTempPackage({...tempPackage, sourceLoc: ''})

            props.onUpdateCC(tempPackage);      
        }
    }

    return(
        <div className={classes.card} onKeyDown={(event)=>{handleESCPress(event); handleEnterPress(event)}} tabIndex="0">
            <form  onSubmit={submitHandler}>
                <div className={classes.titleButtonContainer}>
                <input onChange={handleTitleChange} value={tempPackage.sourceTitle} className={classes.title} name="title" autoFocus placeholder="Press esc to cancel..."></input>
                <div className={classes.spacer}></div>
                <img className={classes.stbutton} src={require('../dummy-data/icons/play.png')}></img>
                </div>

                <textarea onChange={handleNoteChange} value={tempPackage.sourceNote} rows="4" name="description" placeholder="Note"></textarea>

                <div className={classes.container}>
                <div className={classes.spacer}></div>
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>

                    {/* Start Date */}
                    <MobileDatePicker
                    label="Start Date"
                    value={tempPackage.sourceESD}
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
                    value={tempPackage.sourceEED}
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
                    value={tempPackage.sourceEST}
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
                        value={tempPackage.sourceED}
                        sx={{ maxWidth: 115 }}
                    />

                    <div className={classes.divider}></div>

                    {/* END TIME */}
                    <MobileTimePicker
                    autoWidth={true}
                    disabled={true}
                    label="End Time"
                    minutesStep={5}
                    value={tempPackage.sourceEET}
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
                        value={tempPackage.sourceCat}
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
                    value={tempPackage.sourceCat}
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
                        value={tempPackage.sourceLoc}
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
                    value={tempPackage.sourceLoc}
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
