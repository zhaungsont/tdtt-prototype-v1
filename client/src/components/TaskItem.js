/*
本頁面上層為TaskList.js，在 TaskList 會用 map 方法逐一將不同筆 task 一一傳進來
這邊的用途是要將每一筆資料的內部 properties 逐一印出。
*/
import classes from "./TaskItem.module.css";

function TaskItem(props){
    return (
        <div className={classes.container}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.space}> </p>

            {props.note && <img className={classes.icons} src={require("../dummy-data/icons/note.png")}/> }
            {props.note && <p> {props.note} ·{'\u00A0'}</p>}

            {props.category && <img className={classes.icons} src={require("../dummy-data/icons/category.png")}/> }
            {props.category && <p> {props.category} ·{'\u00A0'}</p>}

            {props.status && <img className={classes.icons} src={require("../dummy-data/icons/status.png")}/> }
            {props.status && <p> {props.status} ·{'\u00A0'}</p>}

            {props.location && <img className={classes.icons} src={require("../dummy-data/icons/location.png")}/> }
            {props.location && <p>{props.location} ·{'\u00A0'}</p>}

            {props.esd && <img className={classes.icons} src={require("../dummy-data/icons/esd.png")}/> }
            {props.esd && <p>{props.esd} ·{'\u00A0'}</p>}

            {props.asd && <img className={classes.icons} src={require("../dummy-data/icons/asd.png")}/> }
            {props.asd && <p>{props.asd} ·{'\u00A0'}</p>}

            {props.est && <img className={classes.icons} src={require("../dummy-data/icons/est.png")}/> }
            {props.est && <p>{props.est} ·{'\u00A0'}</p>}

            {props.ast && <img className={classes.icons} src={require("../dummy-data/icons/ast.png")}/> }
            {props.ast && <p>{props.ast} ·{'\u00A0'}</p>}

            {props.ed && <img className={classes.icons} src={require("../dummy-data/icons/ed.png")}/> }
            {props.ed && <p>{props.ed} ·{'\u00A0'}</p>}

            {props.ad && <img className={classes.icons} src={require("../dummy-data/icons/ad.png")}/> }
            {props.ad && <p>{props.ad} </p>}
        </div>
    );
}

export default TaskItem;