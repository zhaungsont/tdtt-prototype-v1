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


import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";


function TaskList(){
    const newTaskCTX = useContext(newTaskContext);
    const dummyTasks = newTaskCTX.dummyTaskList;
    console.log(dummyTasks)

    // function gridFormatConverter(obj){
    //     obj.ESD = obj.ESD.toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric'});
    // }
    
    // useEffect(()=>{
    //     dummyTasks.forEach((row)=>{
    //         row.ESD = row.ESD.toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric'});
    //       });
    //     console.log(dummyTasks);
    // }, [dummyTasks, newTaskCTX.totalTasks]);
    
    const rows: GridRowsProp = dummyTasks;
      
      const columns: GridColDef[] = [
        { field: "id", hide: true },
        { field: "title", headerName: "Title", width: 150 },
        { field: "ESDString", headerName: "ESD", width: 150 },
        { field: "ESTString", headerName: "EST", width: 150 },
        { field: "ED", headerName: "ED", width: 150 },
        { field: "EEDString", headerName: "EED", width: 150 },
        { field: "EETString", headerName: "EET", width: 150 },
        { field: "cat", headerName: "Cat", width: 150 },
        { field: "loc", headerName: "Loc", width: 150 },
        { field: "note", headerName: "Note", width: 150 },
        { field: "dateCreated", headerName: "Date Created", width: 350 }
      ];

    if (newTaskCTX.totalTasks) {
        // console.log(dummyTasks[0].ESD);
        return (
            <div className={classes.list}>
                <h2>Today's Tasks</h2>
                <CreationInput />
                <div style={{ height: '80vh', width: "100%" }}>
                <DataGrid rows={dummyTasks} columns={columns} />
                </div>
                {/* {dummyTasks.map((todo) => {
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
                })} */}
    
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


/*
Related Materials
https://stackoverflow.com/questions/13391579/how-to-rename-json-key



*/