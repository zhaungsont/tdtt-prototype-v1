import classes from "./Login.module.css";
import { useState, useRef } from "react";

function Login(){
    const accountInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event){
        event.preventDefalt();

        const account = accountInputRef.current.value;
        const password = passwordInputRef.current.value;
        const loginData = {account: account, password: password}
    }
    
    return(
        <div className={classes.loginWrapper}>
            <form onSubmit={submitHandler}>
                <label>
                    <p>Email</p>
                    <input type="text" ref={usernameInputRef} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" ref={passwordInputRef} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;