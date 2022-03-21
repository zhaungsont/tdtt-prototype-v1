/*
本頁面上層為TaskList.js，在 TaskList 會用 map 方法逐一將不同筆 task 一一傳進來
這邊的用途是要將每一筆資料的內部 properties 逐一印出。
*/
import classes from "./TaskItem.module.css";

function TaskItem(props){
    return (
        <li>
            <div className={classes.taskItem}>
            
                <h1>{props.title}</h1>
                <p>
                {props.note} <br />
                {props.category} <br />
                {props.status} <br />
                {props.location} <br />
                </p>
            
            </div>
        </li>
    );
}

export default TaskItem;