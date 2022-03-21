import Dashboard from "../Dashboard";
import TaskList from "../TaskList";
import classes from "./HomeLayout.module.css";

function HomeLayout(){
    return (
        <div className={classes.mainContent}>
            <Dashboard />
            hi
            <TaskList />
        </div>
    );
}

export default HomeLayout;