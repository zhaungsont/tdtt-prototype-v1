import HomeLayout from "../components/layout/HomeLayout";
import Sidebar from "../components/Sidebar";

function Home(){
    return (
        <div>
            <Sidebar />
            <HomeLayout />
        </div>
    );
}

export default Home;