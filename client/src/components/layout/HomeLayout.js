import Dashboard from "../Dashboard";
import TaskList from "../TaskList";
import classes from "./HomeLayout.module.css";
import dummyRecords from "../../dummy-data/todos";

function HomeLayout(){


    return (
        <div className={classes.mainContent}>
            <Dashboard />
            <TaskList />
        </div>
    );
}

export default HomeLayout;