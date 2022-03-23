/*
本頁面上層為TaskList.js，在 TaskList 會用 map 方法逐一將不同筆 task 一一傳進來
這邊的用途是要將每一筆資料的內部 properties 逐一印出。
*/
import classes from "./TaskItem.module.css";

function TaskItem(props){
    return (
    <div className={classes.hover}>
        <div className={classes.container}>
            
            <p className={classes.title}>{props.title}</p>
            <p className={classes.space}> </p>

            {props.note ? <img className={classes.icons} src={require("../dummy-data/icons/note1.png")}/> : <img className={classes.icons} src={require("../dummy-data/icons/note0.png")}/> }
            

            {props.category && <img className={classes.icons} src={require("../dummy-data/icons/category.png")}/> }
            {props.category && <p className={classes.properties}> {props.category} {'\u00A0'}</p>}

            {props.status && <img className={classes.icons} src={require("../dummy-data/icons/status.png")}/> }
            {props.status && <p className={classes.properties}> {props.status} {'\u00A0'}</p>}

            {props.location && <img className={classes.icons} src={require("../dummy-data/icons/location.png")}/> }
            {props.location && <p className={classes.properties}>{props.location} {'\u00A0'}</p>}

            {props.esd && <img className={classes.icons} src={require("../dummy-data/icons/esd.png")}/> }
            {props.esd && <p className={classes.properties}>{props.esd} {'\u00A0'}</p>}

            {props.asd && <img className={classes.icons} src={require("../dummy-data/icons/asd.png")}/> }
            {props.asd && <p className={classes.properties}>{props.asd} {'\u00A0'}</p>}

            {props.est && <img className={classes.icons} src={require("../dummy-data/icons/est.png")}/> }
            {props.est && <p className={classes.properties}>{props.est} {'\u00A0'}</p>}

            {props.ast && <img className={classes.icons} src={require("../dummy-data/icons/ast.png")}/> }
            {props.ast && <p className={classes.properties}>{props.ast} {'\u00A0'}</p>}

            {props.ed && <img className={classes.icons} src={require("../dummy-data/icons/ed.png")}/> }
            {props.ed && <p className={classes.properties}>{props.ed} {'\u00A0'}</p>}

            {props.ad && <img className={classes.icons} src={require("../dummy-data/icons/ad.png")}/> }
            {props.ad && <p className={classes.properties}>{props.ad} </p>}
        </div>
    </div>
    );
}

export default TaskItem;