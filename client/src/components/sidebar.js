import classes from "./Sidebar.module.css";
import SideNav from "./SideNav";

function Sidebar(){
    return (
        <div className={classes.sidebar}>
            <h2>Morgan Freeman</h2>
            <img className={classes.pfp} src={require("../dummy-data/icons/user.png")}></img>
            <SideNav />
        </div>
    );
}

export default Sidebar;