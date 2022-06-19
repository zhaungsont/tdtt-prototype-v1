import classes from "./Dashboard.module.css";
import { useState, useEffect } from "react";


function Dashboard(){

    const [greeting, setGreeting] = useState(null)
    const [update, setUpdate] = useState(null)
    const date = new Date();
    let hour = date.getHours();

    setInterval(() => {
        setUpdate(hour);
    }, 60000);

    useEffect(() => {
        if (hour == 12) {
            setGreeting("It's 12, Time to Wrap Things up")
        } else if (hour < 2){
            setGreeting("It's " + hour + ", Might Wanna Go to Sleep Soon")
        } else if (hour < 4){
            setGreeting("It's " + hour + " now, Get to Bed Already")
        } else if (hour < 12){
            setGreeting('Good Morning');
        } else if (hour < 18){
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
      }, [update]);



    return (
        <div className={classes.dashboard}>
            <h1>{greeting}, Michael.</h1>
            <div className={classes.charts}>
                <img src={require("../dummy-data/charts/chart1.png")} width="100" ></img>
                <img src={require("../dummy-data/charts/chart2.png")} width="100" ></img>
                <img src={require("../dummy-data/charts/chart3.png")} width="100" ></img>
            </div>
        </div>
    );
}

export default Dashboard;
