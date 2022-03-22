import Sidebar from "../components/Sidebar";
import MainContent from "../components/ui/MainContent";

function Settings(){
    return(
        <div>
            <Sidebar />
            <MainContent>
                <h1>Settings</h1>
            </MainContent>
        </div>
    );
}

export default Settings;