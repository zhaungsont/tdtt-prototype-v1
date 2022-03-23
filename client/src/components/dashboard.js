import classes from "./Dashboard.module.css";

function Dashboard(){
    return (
        <div className={classes.dashboard}>
            <h1>Good Morning, 炫風雞腿堡.</h1>
            <div className={classes.charts}>
                <img src={require("../dummy-data/charts/chart1.png")} width="100" ></img>
                <img src={require("../dummy-data/charts/chart2.png")} width="100" ></img>
                <img src={require("../dummy-data/charts/chart3.png")} width="100" ></img>
            </div>
        </div>
    );
}

export default Dashboard;