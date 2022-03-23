import classes from "./Backdrop.module.css";

/*
Backdrop 會在創建方塊是開啟狀態時讓使用者無法和頁面裡的其他物件互動，
方法是直接用一個 z-index 為2的半透明 div 包住整個螢幕
*/


function Backdrop(props){
    
    return <div className={classes.backdrop} onClick={props.onCollapse}/>;
}

export default Backdrop;