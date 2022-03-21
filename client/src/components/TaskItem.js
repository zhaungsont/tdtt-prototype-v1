/*
本頁面上層為TaskList.js，在 TaskList 會用 map 方法逐一將不同筆 task 一一傳進來
這邊的用途是要將每一筆資料的內部 properties 逐一印出。
*/
import classes from "./TaskItem.module.css";

function TaskItem(props){
    return (
        <div className={classes.container}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.space}> </p>
            <p className={classes.properties}>Note: ... ·{'\u00A0'}</p>
            <p className={classes.properties}>Cat: {props.category} ·{'\u00A0'}</p>
            <p className={classes.properties}>Sta: {props.status} ·{'\u00A0'}</p>
            <p className={classes.properties}>Loc: {props.location} ·{'\u00A0'}</p>
            <p className={classes.properties}>ESD: {props.esd} ·{'\u00A0'}</p>
            <p className={classes.properties}>EED: {props.eed} ·{'\u00A0'}</p>
            <p className={classes.properties}>EST: {props.est} ·{'\u00A0'}</p>
            <p className={classes.properties}>EET: {props.eet}</p>
        </div>
    );
}

export default TaskItem;