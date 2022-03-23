import classes from "./CreationCard.module.css";
import { useState, useRef, useEffect } from "react";


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

    return(
        <div className={classes.card}>
            <form>
                <input className={classes.title} name="title" autoFocus placeholder="Title"></input>
                <textarea  rows="4" name="description" placeholder="Note"></textarea>
                
                <div className={classes.properties}>
                    <div>
                        <label htmlFor="esd">Estimated Start Date: </label>
                        <input type="date" id="esd" name="esd"
                            value="2000-01-09">
                        </input>
                    </div>
                    <div>
                        <label htmlFor="eed">Estimated End Date: </label>
                        <input type="date" id="eed" name="eed"
                            value="2000-01-09">
                        </input>
                    </div>
                    <div>
                        <label htmlFor="est">Estimated Start Time:</label>
                        <input type="time" id="est" name="est"></input>
                    </div>
                    <div>
                        <label htmlFor="eet">Estimated End Time:</label>
                        <input type="time" id="eet" name="eet"></input>
                    </div>
                </div>
                <div className={classes.spacer}></div>



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



*/