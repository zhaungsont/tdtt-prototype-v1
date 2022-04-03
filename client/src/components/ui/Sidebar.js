import classes from "./Sidebar.module.css";
import SideNav from "../SideNav";
import { useState } from "react";


// sidebar z-index = 1

function Sidebar(){

    const [counter, setCounter] = useState(0);

    function addCount(){
        setCounter(counter+1);
    }

    function resetCount(){
        setCounter(0);
    }



    return (
        <div className={classes.sidebar}>
            <h2 className={classes.username}>Michael Chuang</h2>
            {counter < 20 ? <img onClick={addCount} className={classes.pfp} src={require("../../dummy-data/icons/user.png")}></img> 
            : <img onClick={resetCount} className={classes.pfp} src={require("../../dummy-data/icons/rr.png")}></img>}
            {/* <h1>{counter}</h1> */}
            <SideNav />
            {counter == 20 && <div style={{'text-align': 'center'}}>Like this app? Please tell me how you think about it: <a href = "mailto: zhsont@gmail.com">zhsont@gmail.com</a>. </div>}
        </div>
    );
}

export default Sidebar;