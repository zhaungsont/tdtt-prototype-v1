import { createContext, useContext, useState } from "react";

const NewTaskContext = createContext({
    dummyTaskList: [],
    newTask:{},
    submitNewTask:(submittedTask)=>{}
});

export function NewTaskContextProvider(props){

    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState();

    function submitNewTaskHandler(submittedTask){
        const dateCreated = new Date();
        const newTask = {
            title: submittedTask.sourceTitle,
            note: submittedTask.sourceNote,
            dateCreated: dateCreated,
            ESD: submittedTask.sourceESD,
            EED: submittedTask.sourceEED,
            EST: submittedTask.sourceEST,
            EET: submittedTask.sourceEET,
            ED: submittedTask.sourceED,
            cat: submittedTask.sourceCat,
            loc: submittedTask.sourceLoc
        };
        if (!newTask.ESD){
            const newESD = new Date();
            newESD.setHours(0);
            newESD.setMinutes(0);
            newESD.setSeconds(0);
            newTask.ESD = newESD;
        }
        if (!newTask.EED){
            const newEED = new Date();
            newEED.setHours(0);
            newEED.setMinutes(0);
            newEED.setSeconds(0);
            newTask.EED = newEED;
        }
        setNewTask(newTask);
        cancatNewTaskHandler(newTask);
        console.log('please');
        console.log(newTask)
    }

    function cancatNewTaskHandler(submittedTask){
        console.log('below:');
        console.log(submittedTask);
        setTaskList(prevList=>{
            return prevList.concat(submittedTask);
        })
    }

    const context = {
        dummyTaskList: taskList,
        newTask: newTask,
        totalTasks: taskList.length,
        submitNewTask: submitNewTaskHandler
    }
    return (
        <NewTaskContext.Provider  value={context}>
            {props.children}
        </NewTaskContext.Provider>
    )
}

export default NewTaskContext;

// newTask:{
//     title: '',
//     note: '',
//     ESD: null,
//     EED: null,
//     EST: null,
//     EET: null,
//     ED: null,
//     cat: '',
//     loc: '',
//     created: null
// }