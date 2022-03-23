import Sidebar from "../components/ui/Sidebar";
import Dashboard from "../components/Dashboard";
import TaskList from "../components/TaskList";
import MainContent from "../components/ui/MainContent";

function Home(){
    return (
        <div>
            <Sidebar />

            <MainContent>
                <Dashboard />
                <TaskList />
            </MainContent>
        </div>
    );
}

export default Home;