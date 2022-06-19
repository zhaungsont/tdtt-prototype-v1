import classes from "./Login.module.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";



function Login(){
    const navigate = useNavigate();
    const accountInputRef = useRef();
    const passwordInputRef = useRef();

    async function submitHandler(event){
        event.preventDefault();

        const account = accountInputRef.current.value;
        const password = passwordInputRef.current.value;
        const loginData = {account: account, password: password}
        console.log(loginData)

        // localStorage.setItem('newuser', account);

        const response = await fetch('http://localhost:3001/api/login',
        {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        
        if (data.user) {
            alert('logged in!');
            navigate('/today', { replace: true });
        } else {
            alert('plz check email or password!');
        }



        // const nu = localStorage.getItem('newuser');
        // console.log(nu);

    }
    
    return(
        <div className={classes.loginWrapper}>
            <form onSubmit={submitHandler}>
                <label>
                    <p>Email</p>
                    <input type="text" required ref={accountInputRef} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" required ref={passwordInputRef} />
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;