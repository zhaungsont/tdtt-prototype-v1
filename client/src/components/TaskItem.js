/*
本頁面上層為TaskList.js，在 TaskList 會用 map 方法逐一將不同筆 task 一一傳進來
這邊的用途是要將每一筆資料的內部 properties 逐一印出。
*/
import classes from "./TaskItem.module.css";
import { useState } from "react";
import { func } from "prop-types";

function TaskItem(props){

    const [expanded, setExpanded] = useState(false)

    function handleExpand(){
        setExpanded(!expanded);
    }

    return (
    <div onClick={handleExpand} className={classes.hover}>
        <div className={classes.container}>
            
            <p className={classes.title}>{props.title}</p>
            <p className={classes.space}> </p>

            {props.note ? <img className={classes.icons} src={require("../dummy-data/icons/note1.png")}/> : <img className={classes.icons} src={require("../dummy-data/icons/note0.png")}/> }
            

            {props.category && <img className={classes.icons} src={require("../dummy-data/icons/category.png")}/> }
            {props.category && <p className={classes.properties}> {props.category} </p>}

            {props.status && <img className={classes.icons} src={require("../dummy-data/icons/status.png")}/> }
            {props.status && <p className={classes.properties}> {props.status} </p>}

            {props.location && <img className={classes.icons} src={require("../dummy-data/icons/location.png")}/> }
            {props.location && <p className={classes.properties}>{props.location} </p>}

            {props.esd && <img className={classes.icons} src={require("../dummy-data/icons/esd.png")}/> }
            {props.esd && <p className={classes.properties}>{props.esd} </p>}

            {props.asd && <img className={classes.icons} src={require("../dummy-data/icons/asd.png")}/> }
            {props.asd && <p className={classes.properties}>{props.asd} </p>}

            {props.est && <img className={classes.icons} src={require("../dummy-data/icons/est.png")}/> }
            {props.est && <p className={classes.properties}>{props.est} </p>}

            {props.ast && <img className={classes.icons} src={require("../dummy-data/icons/ast.png")}/> }
            {props.ast && <p className={classes.properties}>{props.ast} </p>}

            {props.ed && <img className={classes.icons} src={require("../dummy-data/icons/ed.png")}/> }
            {props.ed && <p className={classes.properties}>{props.ed} </p>}

            {props.ad && <img className={classes.icons} src={require("../dummy-data/icons/ad.png")}/> }
            {props.ad && <p className={classes.properties}>{props.ad} </p>}
        </div>
        {expanded && <div className={classes.expanded}>
            {/* expanded area */}
            <p>Category: {props.category} | Status: {props.status} | Location: {props.location} | Actual Duration: {props.ad}</p>
            <em>{props.note}</em>
        </div>}
    </div>
    );
}

export default TaskItem;