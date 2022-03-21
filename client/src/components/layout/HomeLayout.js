import Dashboard from "../Dashboard";
import TaskList from "../TaskList";
import classes from "./HomeLayout.module.css";
import MainContent from "../ui/MainContent";

function HomeLayout(){
    return (
        <MainContent>
            <Dashboard />
            <TaskList />
        </MainContent>
    );
}

export default HomeLayout;