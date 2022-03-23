import { useState } from "react";
import CreationCard from "./CreationCard";
import Backdrop from "./Backdrop";
import classes from "./CreationList.module.css";

function CreationList(){
    
    const [expanded, setExpanded] = useState(false)

    function expandHandler(){
        setExpanded(true);
    }

    function collapseHandler(){
        setExpanded(false);
    }

    // backdrop z-index = 2

    return(
        <div>
            {expanded ? null : <div onClick={expandHandler}  className={classes.list}> 
                Write something...
            </div>}
                
                {expanded && <CreationCard />}
                {expanded && <Backdrop onCollapse={collapseHandler} />}
        
        </div>
    );
}

export default CreationList;