import { Link } from "react-router-dom";
import classes from "./SideNav.module.css";

function SideNav(){
    return(
        <div className={classes.sidenav}>
        {/* <ul>
            <li>
                <Link to="/">Today</Link>
            </li>
            <li>
                <Link to="/schedule">Schedule</Link>
            </li>
            <li>
                <Link to="/analysis">Analysis</Link>
            </li>
            <li>
                <Link to="/achievements">Achievements</Link>
            </li>
            <li>
                <Link to="/settings">Settings</Link>
            </li>
        </ul> */}
                <Link to="/"><div className={classes.navcss}>Today</div></Link>
                <Link className={classes.hover} to="/schedule"><div className={classes.navcss}>Schedule</div></Link>
                <Link className={classes.hover}  to="/analysis"><div className={classes.navcss}>Analysis</div></Link>

                <hr></hr>

                <Link className={classes.hover}  to="/achievements"><div className={classes.navcss}>Achievements</div></Link>
                <Link className={classes.hover}  to="/settings"><div className={classes.navcss}>Settings</div></Link>
            </div>
    );
}

export default SideNav;