import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(){
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn(){
        const loggedInRes = await fetch('http://localhost:3001/api/login');
        setLoggedIn(loggedInRes.data);
    }

    useEffect(()=>{
        getLoggedIn();
    }, [])

    return(<AuthContext.Provider value={{loggedIn, getLoggedIn}}>
        {props.children}
    </AuthContext.Provider>)
}
export default AuthContext;
export {AuthContextProvider};