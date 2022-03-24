import Sidebar from "../components/ui/Sidebar";
import MainContent from "../components/ui/MainContent";
import classes from "./Achievements.module.css";

function Achievements(){
    return(
        <div>
            <Sidebar />
            <MainContent>
                <h1>Achievements</h1>
                
                {/* https://tenor.com/view/rainbow-meme-mlg-frog-pepe-gif-17213585 */}
                <h2 className={classes.rainbowTextAnimated}>
                <img src={require('../dummy-data/icons/rainbow-meme.gif')} width='60'></img>
                 Achievements Unlocked -- You Opened TDTT! 
                <img src={require('../dummy-data/icons/rainbow-meme.gif')} width='60'></img>
                </h2>

            </MainContent>
        </div>
    );
}

export default Achievements;