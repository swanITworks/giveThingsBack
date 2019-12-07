import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhomWeHelp from "./HomeWhomWeHelp";
import HomeContactUs from "./HomeContactUs";

function Home() {
    return (
        <div className='mainContainer'>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeWhomWeHelp/>
            <HomeContactUs/>
        </div>
    )
}

export default Home;