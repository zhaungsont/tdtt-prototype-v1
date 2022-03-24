import Sidebar from "../components/ui/Sidebar";
import MainContent from "../components/ui/MainContent";
import { useState } from "react";

function Settings(){

    const [lol, setLol] = useState(480);
    function lmao(){
        setLol(lol + 100);
    }
    setInterval(() => {
        lmao()
    }, 1000);

    return(
        <div>
            <Sidebar />
            <MainContent>
                <h1>Settings</h1>
                <img src={require('../dummy-data/icons/rr.png')} width={lol}></img>
            </MainContent>
        </div>
    );
}

export default Settings;