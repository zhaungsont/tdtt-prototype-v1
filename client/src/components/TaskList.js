/*
本頁面為TaskList.js，會先從資料庫取得 array 的 task，
再用 map 方法逐一將不同筆 task 一一傳進 TaskItem.js
*/

import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";
import TODOS from "../dummy-data/tasks/todos";
import CreationList from "./CreationList";

// 暫時用的資料
// const TODOS = [
//     {
//         "title": "Study Python I",
//         "note": "ch11-25",
//         "category": "Academic",
//         "status": "done", // "not yet started", "in progress", "done"
//         "location": "Taipei",
//         "ESD": "3/21",
//         "ASD": "3/21",
//         "EED": "3/22",
//         "AED": "3/21",
//         "EST": "15:00",
//         "AST": "15:03",
//         "EET": "16:00",
//         "AET": "17:15",
//         "ED": "00:60:00",
//         "AD": "01:15:00",
//     },
//     {
//         "title": "Study Python II",
//         "note": "ch26-40",
//         "category": "Academic",
//         "status": "nyt", // "not yet started", "in progress", "done"
//         "location": "Taoyuan",
//         "ESD": "3/23",
//         "ASD": "",
//         "EED": "",
//         "AED": "",
//         "EST": "21:00",
//         "AST": "",
//         "EET": "22:00",
//         "AET": "",
//         "ED": "00:60:00",
//         "AD": "",
//     },
//     {
//         "title": "Build Front-end",
//         "note": "collab w/ Sun Yu",
//         "category": "Dev",
//         "status": "ip", // "not yet started", "in progress", "done"
//         "location": "",
//         "ESD": "3/21",
//         "ASD": "3/21",
//         "EED": "3/22",
//         "AED": "3/21",
//         "EST": "15:00",
//         "AST": "15:03",
//         "EET": "16:00",
//         "AET": "17:15",
//         "ED": "00:60:00",
//         "AD": "01:15:00",
//     }]

function TaskList(){
    return (
        <div className={classes.list}>
            <h2>Today's Tasks</h2>
            <CreationList />

            {TODOS.map((todo) => {
                return (
                    <TaskItem 
                    title={todo.title}
                    note={todo.note}
                    category={todo.category}
                    status={todo.status}
                    location={todo.location}
                    esd={todo.ESD}
                    asd={todo.ASD}
                    eed={todo.EED}
                    aed={todo.AED}
                    est={todo.ESD}
                    ast={todo.ASD}
                    eet={todo.EET}
                    aet={todo.AET}
                    ed={todo.ED}
                    ad={todo.AD}
                    />)
            })}
        </div>
    );
}

export default TaskList;