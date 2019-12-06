import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";

function Home() {
    return (
        <div className='mainContainer'>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
        </div>
    )
}

export default Home;