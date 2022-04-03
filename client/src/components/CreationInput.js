import { useState, useEffect } from "react";
import CreationCard from "./CreationCard";
import Backdrop from "./Backdrop";
import classes from "./CreationInput.module.css";
import { data } from "./Pie";
import moment from 'moment';


function CreationInput(){
    
    const [expanded, setExpanded] = useState(false)

    function expandHandler(){
        setExpanded(true);
    }

    function collapseHandler(){
        setExpanded(false);
    }

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [ESD, setESD] = useState(null);
    const [EED, setEED] = useState(null);
    const [EST, setEST] = useState(null);
    const [EET, setEET] = useState(null);
    const [ED, setED] = useState('');
    let tempPackage = {thisTitle: title, thisNote: note, thisESD:ESD, thisEED:EED, thisEST: EST, thisEET: EET, thisED: ED}

    function inputHandler(tempData){
        console.log(tempData)
        setTitle(tempData.sourceTitle);
        setNote(tempData.sourceNote);
        setESD(tempData.sourceESD);
        setEED(tempData.sourceEED);
        setEST(tempData.sourceEST);
        setEET(tempData.sourceEET);

    }

    const [closeCard, setCloseCard] = useState(false);
    function closeCardHandler(){
        console.log('closing card, showing Creation Input');
        setCloseCard(true);
        setExpanded(false);
        setCloseCard(false);

        console.log('erasing Creation Card Content');
    }

    // VALIDATE TIME INPUT
    // const [dateError, setDateError] = useState(false);
    // const [timeError, setTimeError] = useState(false);
    // useEffect(()=>{

    //     // DATE Validation
    //     if (ESD == EED){
    //         // do nothing.
    //         // this field prevents the two same dates being deemed invalid by js
    //     } else if (ESD != null && EED != null && ESD > EED){
    //         console.log('ERROR! Start Date is later than End Date!');
    //         setDateError(true)
    //     } else {
    //         setDateError(false);
    //     }


    //     // TIME Validation
    //     if (ESD == EED) {
    //         // the start date and the end date are the same
    //         // this could either mean:
    //         // 1. the user has no start or end date
    //         // 2. the user set start and end date on the same day
    //         // either way, we NEED TO VALIDATE the TIME
    //         if (EST != null && EET != null && EST > EET){
    //             // the user has input both starting & ending time
    //             // the starting time is LATER than ending time
    //             console.log('ERROR! Start Time is later than End Time!');
    //             setTimeError(true);
    //         } else {
    //             // the user either has only start time or end time,
    //             // or the start time is earlier than end time.
    //             // either way, this is valid.
    //             setTimeError(false);
    //         }
    //     }
    
    // }, [expanded, ESD, EED, EST, EET]);

    return(
        <div>
            {expanded ? null : <div onClick={expandHandler}  className={classes.list}> 
                <span><em>Write something... </em>
                <img className={classes.stbutton} src={require('../dummy-data/icons/play.png')}></img></span>
            </div>}
                
                {(expanded && !closeCard) && <CreationCard 
                    onExpand={inputHandler}  
                    tempData={tempPackage} 
                    onESC={closeCardHandler} 
                />}
                {(expanded && !closeCard) && <Backdrop onCollapse={collapseHandler} />}
        
        </div>
    );
}

export default CreationInput;

// backdrop z-index = 2