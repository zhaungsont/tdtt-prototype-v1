import classes from "./MainContent.module.css"; 

function MainContent(props){
    return (
        <div className={classes.mc}>
            {props.children}
        </div>
    );
}

export default MainContent;