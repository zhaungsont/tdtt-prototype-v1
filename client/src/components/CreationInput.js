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

    const [draftTask, setdraftTask] = useState();

    // const [title, setTitle] = useState('');
    // const [note, setNote] = useState('');
    // const [ESD, setESD] = useState(null);
    // const [EED, setEED] = useState(null);
    // const [EST, setEST] = useState(null);
    // const [EET, setEET] = useState(null);
    // const [ED, setED] = useState('');
    // let tempPackage = {thisTitle: title, thisNote: note, thisESD:ESD, thisEED:EED, thisEST: EST, thisEET: EET, thisED: ED}

    function inputHandler(tempData){
        console.log(tempData)
        setdraftTask(tempData);
    }

    const [closeCard, setCloseCard] = useState(false);
    function closeCardHandler(){
        console.log('closing card, showing Creation Input');
        setCloseCard(true);
        setExpanded(false);
        setCloseCard(false);
    }

    function submitHandler(){
        console.log('yy')
    }


    return(
        <div>
            {expanded ? null : <div onClick={expandHandler}  className={classes.list}> 
                <span><em>Write something... </em>
                <img className={classes.stbutton} src={require('../dummy-data/icons/play.png')}></img></span>
            </div>}
                
                {(expanded && !closeCard) && <CreationCard 
                    onUpdateCC={inputHandler}  
                    // tempData={tempPackage} 
                    onESC={closeCardHandler}
                    onSubmitTask={submitHandler}
                />}
                {(expanded && !closeCard) && <Backdrop onCollapse={collapseHandler} />}
        
        </div>
    );
}

export default CreationInput;

// backdrop z-index = 2