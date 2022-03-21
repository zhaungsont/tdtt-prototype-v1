import { useState } from "react";
import dummyTasks from "../dummy-data/todos"

function TaskList(){
    dummyTasks.forEach((record)=>{
        console.log(record)
    })
    const [isLoading, setIsLoading] = useState(true)

    for (const record in dummyTasks) {
        console.log('hi')
    }
    if (isLoading) {
        return <div>Loading...</div>
    }

    
    return (
        <div>
            TaskList
        </div>
    );
}

export default TaskList;