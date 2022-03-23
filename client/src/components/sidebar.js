import classes from "./Sidebar.module.css";
import SideNav from "./SideNav";
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
            <h2 className={classes.username}>Morgan Freeman</h2>
            {counter < 20 ? <img onClick={addCount} className={classes.pfp} src={require("../dummy-data/icons/user.png")}></img> 
            : <img onClick={resetCount} className={classes.pfp} src={require("../dummy-data/icons/rr.png")}></img>}
            {/* <h1>{counter}</h1> */}
            <SideNav />
        </div>
    );
}

export default Sidebar;