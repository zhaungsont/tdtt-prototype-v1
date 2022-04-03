import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RedirectPage(){
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/today', {replace: true});
    }, [])
    return(
        <div></div>
    )
}

export default RedirectPage;