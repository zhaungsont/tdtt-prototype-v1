import { useState, useEffect, useContext } from "react";
import CreationCard from "./CreationCard";
import Backdrop from "./Backdrop";
import classes from "./CreationInput.module.css";
import newTaskContext from "../store/NewTaskContext";

function CreationInput(){
    const newTaskCTX = useContext(newTaskContext);

    const [expanded, setExpanded] = useState(false)
    const [draftTask, setdraftTask] = useState();
    const [dummyTaskList, setDummyTaskList] = useState([]);

    function expandHandler(){
        setExpanded(true);
    }

    function collapseHandler(){
        setExpanded(false);
        // console.log(dummyTaskList)
    }

    function inputHandler(tempData){
        console.log(tempData)
        setdraftTask(tempData);

    }

    const [closeCard, setCloseCard] = useState(false);
    function closeCardHandler(){
        // console.log('closing card, showing Creation Input');
        setCloseCard(true);
        setExpanded(false);
        setCloseCard(false);
    }

    // Handles "Submit and Add to List", but Doesn't Time Track Now!
    function submitHandler(){
        // check for invalid inputs: Empty Title or Invalid Date Spans.

        const title = draftTask.sourceTitle.trim();
        const invalidDate = draftTask.invalidDate;
        if (!title || invalidDate){
            console.log('invalid entry!!')
        } else {
            // New task created successfully!
            // const dateCreated = new Date();
            // draftTask.concat({dateCreated: dateCreated});
            // setdraftTask((prevTask)=>{return {...prevTask, created: dateCreated}});
            // setDummyTaskList((prevList)=>[...prevList, draftTask]);
            
            // setDummyTaskList((prev)=>{
            //     return prev.concat(draftTask);
            // })
            // console.log('ggg')
            // console.log(draftTask)
            console.log('draft:')
            console.log(draftTask);
            newTaskCTX.submitNewTask(draftTask);
            closeCardHandler();
        }
    }



    return(
        <div>
            {expanded ? null : <div onClick={expandHandler}  className={classes.list}> 
                <span><em>Write something... </em>
                <img className={classes.stbutton} src={require('../dummy-data/icons/play.png')}></img></span>
            </div>}
                
                {(expanded && !closeCard) && <CreationCard 
                    onUpdateCC={inputHandler}  
                    // tempData={tempPackage} 
                    onESC={closeCardHandler}
                    onSubmitTask={submitHandler}
                />}
                {(expanded && !closeCard) && <Backdrop onCollapse={collapseHandler} />}
        
        </div>
    );
}

export default CreationInput;

// backdrop z-index = 2