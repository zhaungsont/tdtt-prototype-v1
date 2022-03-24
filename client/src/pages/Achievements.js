import Sidebar from "../components/ui/Sidebar";
import MainContent from "../components/ui/MainContent";

function Achievements(){
    return(
        <div>
            <Sidebar />
            <MainContent>
                <h1>Achievements</h1>
                <p>Achievements Unlocked -- You Opened TDTT!</p>
            </MainContent>
        </div>
    );
}

export default Achievements;