/*
本頁面為TaskList.js，會先從資料庫取得 array 的 task，
再用 map 方法逐一將不同筆 task 一一傳進 TaskItem.js
*/

import { useState, useEffect, useContext } from "react";
import newTaskContext from "../store/NewTaskContext";

import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";
import TODOS from "../dummy-data/tasks/todos";
import CreationInput from "./CreationInput";

// 暫時用的資料


function TaskList(){
    const newTaskCTX = useContext(newTaskContext);
    const dummyTasks = newTaskCTX.dummyTaskList;

    if (newTaskCTX.totalTasks) {
        // console.log(dummyTasks[0].ESD);
        return (
            <div className={classes.list}>
                <h2>Today's Tasks</h2>
                <CreationInput />
                {dummyTasks.map((todo) => {
                    return (
                        <TaskItem 
                        title={todo.title}
                        note={todo.note}
                        category={todo.cat}
                        location={todo.loc}
                        esd={todo.ESD.toString()}
                        eed={todo.EED.toString()}
                        est={todo.EST && todo.EST.toString()}
                        eet={todo.EET && todo.EET.toString()}
                        ed={todo.ED && todo.ED.toString()}
                        />)
                })}
    
                {/* {TODOS.map((todo) => {
                    return (
                        <TaskItem 
                        key={todo.id}
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
                })} */}
            </div>
        );
    } else {
        
        return (
            <div className={classes.list}>
                <h2>Today's Tasks</h2>
                <CreationInput />
                <h1>You have no tasks!</h1>
            </div>
        );
    }
    
}

export default TaskList;