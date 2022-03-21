/*
本頁面上層為TaskList.js，在 TaskList 會用 map 方法逐一將不同筆 task 一一傳進來
這邊的用途是要將每一筆資料的內部 properties 逐一印出。
*/
import classes from "./TaskItem.module.css";

function TaskItem(props){
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>{props.title}</h3>
            <p className={classes.space}> </p>
            <p className={classes.properties}>Note: ...</p>
            <p className={classes.properties}>Cat: {props.category} </p>
            <p className={classes.properties}>Sta: {props.status} </p>
            <p className={classes.properties}>Loc: {props.location} </p>
            <p className={classes.properties}>ESD: {props.esd} </p>
            <p className={classes.properties}>EED: {props.eed} </p>
            <p className={classes.properties}>EST: {props.est} </p>
            <p className={classes.properties}>EET: {props.eet} </p>
        </div>
    );
}

export default TaskItem;