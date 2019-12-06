import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";

function Home() {
    return (
        <div className='mainContainer'>
        <HomeHeader/>
        <HomeThreeColumns/>
        </div>
    )
}

export default Home;