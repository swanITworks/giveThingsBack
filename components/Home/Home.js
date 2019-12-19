import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhomWeHelp from "./HomeWhomWeHelp";
import HomeContactUs from "./HomeContactUs";

function Home(props) {
    return (
        <div className='mainContainer'>
            <HomeHeader isLogIn={props.isLogIn} logOutHandler={props.logOutHandler} location={props.location}/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeWhomWeHelp/>
            <HomeContactUs/>
        </div>
    )
}

export default Home;