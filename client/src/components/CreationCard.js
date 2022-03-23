import classes from "./CreationCard.module.css";
import { useState, useRef, useEffect } from "react";
import Backdrop from "./Backdrop";

// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

function CreationCard(){

    // https://stackoverflow.com/questions/53314857/how-to-focus-something-on-next-render-with-react-hooks
    // const EditableField = () => {
    //     const [isEditing, setEditing] = useState(false);
    //     const toggleEditing = () => {
    //       setEditing(!isEditing);
    //     };
      
    //     const inputRef = useRef(null);
      
    //     useEffect(() => {
    //       if (isEditing) {
    //         inputRef.current.focus();
    //       }
    //     }, [isEditing]);
    // }
    const [ESD, setESD] = useState(false);
    function openESD(){
        closeAllProperties()
        setESD(!ESD);
    }

    const [EED, setEED] = useState(false);
    function openEED(){
        closeAllProperties()
        setEED(!EED);
    }

    const [EST, setEST] = useState(false);
    function openEST(){
        closeAllProperties()
        setEST(!EST);
    }

    const [EET, setEET] = useState(false);
    function openEET(){
        closeAllProperties()
        setEET(!EET);
    }

    function closeAllProperties(){
        setESD(false);
        setEED(false);
        setEST(false);
        setEET(false);
    }

    function handleTitleChange(event){
        console.log(event.target.value); //whatever the user types in
    }

    function handleESDChange(event){
        console.log(event.target.value); //whatever the user types in
    }

    function submitHandler(event){
        event.preventDefault();
    }

    const [startDate, setStartDate] = useState(new Date());

    return(
        <div className={classes.card}>
            <form  onSubmit={submitHandler}>

{/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}


                <input onChange={handleTitleChange} onClick={closeAllProperties} className={classes.title} name="title" autoFocus placeholder="Title"></input>
                <textarea onClick={closeAllProperties} rows="4" name="description" placeholder="Note"></textarea>
                
                <div className={classes.container}>
                    {ESD && <div>
                        <label htmlFor="esd">Estimated Start Date: </label>
                        <input type="date" id="esd" name="esd" className={classes.properties}></input>
                    </div>}
                    <img className={classes.icons} onClick={openESD} src={require("../dummy-data/icons/esd.png")}></img>

                    {EED && <div>
                        <label htmlFor="eed">Estimated End Date: </label>
                        <input type="date" id="eed" name="eed" className={classes.properties}></input>
                    </div>}
                    <img className={classes.icons} onClick={openEED} src={require("../dummy-data/icons/asd.png")}></img>

                    {EST && <div>
                        <label htmlFor="est">Estimated Start Time:</label>
                        <input type="time" id="est" name="est" className={classes.properties}></input>
                    </div>}
                    <img className={classes.icons} onClick={openEST} src={require("../dummy-data/icons/est.png")}></img>

                    {EET && <div>
                        <label htmlFor="eet">Estimated End Time:</label>
                        <input type="time" id="eet" name="eet" className={classes.properties}></input>
                    </div>}
                    <img className={classes.icons} onClick={openEET} src={require("../dummy-data/icons/ast.png")}></img>

                </div>
                {(ESD||EED||EST||EET) ? null : <div className={classes.spacer}></div>}



            </form>
        </div>
    );
}

export default CreationCard;


/* 本頁面用到的補充資料：
 
<input type="date">
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date

<input type="time">
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time

REACT DATEPICKER
https://reactdatepicker.com/
https://www.npmjs.com/package/react-datepicker


*/