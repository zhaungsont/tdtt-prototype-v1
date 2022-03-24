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
        if (hour == 0) {
            setGreeting('12 點了還不睡啊')
        } else if (hour < 2){
            setGreeting(hour + ' 點了還不睡啊')
        } else if (hour < 4){
            setGreeting(hour + ' 點了啊啊快睡啊啊啊')
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
            <h1>{greeting}, 炫風雞腿堡.</h1>
            <div className={classes.charts}>
                <img src={require("../dummy-data/charts/chart1.png")} width="100" ></img>
                <img src={require("../dummy-data/charts/chart2.png")} width="100" ></img>
                <img src={require("../dummy-data/charts/chart3.png")} width="100" ></img>
            </div>
        </div>
    );
}

export default Dashboard;