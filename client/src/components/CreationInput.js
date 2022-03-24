import { useState } from "react";
import CreationCard from "./CreationCard";
import Backdrop from "./Backdrop";
import classes from "./CreationInput.module.css";
import { data } from "./Pie";

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
    let tempPackage = {thisTitle: title, thisNote: note}

    function inputHandler(tempData){
        console.log(tempData)
        setTitle(tempData.sourceTitle);
        setNote(tempData.sourceNote);
    }

    const [closeCard, setCloseCard] = useState(false);
    function closeCardHandler(){
        console.log('closing!');
        setCloseCard(true);
        setExpanded(false);
        setCloseCard(false);
    }



    // backdrop z-index = 2

    return(
        <div>
            {expanded ? null : <div onClick={expandHandler}  className={classes.list}> 
                <span><em>Write something... </em>
                <img className={classes.stbutton} src={require('../dummy-data/icons/play.png')}></img></span>
            </div>}
                
                {(expanded && !closeCard) && <CreationCard onExpand={inputHandler}  tempData={tempPackage} onESC={closeCardHandler} />}
                {(expanded && !closeCard) && <Backdrop onCollapse={collapseHandler} />}
        
        </div>
    );
}

export default CreationInput;