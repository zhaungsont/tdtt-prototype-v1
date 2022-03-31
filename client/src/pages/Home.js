import Sidebar from "../components/ui/Sidebar";
import Dashboard from "../components/Dashboard";
import TaskList from "../components/TaskList";
import MainContent from "../components/ui/MainContent";
import Example from "../components/Example";
import { useEffect } from "react";
// import jwt from "jsonwebtoken";
import { useNavigate } from 'react-router-dom';

const uri = 'http://localhost:3001/api/token';

function Home(){

    // async function aaa(){
    //     const data = await fetch(uri, {
    //         headers: {
    //             'x-access-token': localStorage.getItem('token')
    //         }
    //     })
    // }

    // const navigate = useNavigate();

    // useEffect(()=>{
    //     const token = localStorage.getItem('token');

    //     if (token){
    //         const user = jwt.decode(token);
    //         console.log(user);

    //         if (!user) {
    //             localStorage.removeItem(token);
    //             navigate('/login', { replace: true });
    //     } 
    //     }
    // }, [])


    return (
        <div>
            <Sidebar />

            <MainContent>
                <Example />
                <Dashboard />
                <TaskList />
            </MainContent>
        </div>
    );
}

export default Home;