import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhomWeHelp from "./HomeWhomWeHelp";
import HomeContactUs from "./HomeContactUs";

function Home(props) {

    const {logInEmail, location, logOutHandler, isLogIn} = props;

    return (
        <div className='mainContainer'>
            <HomeHeader isLogIn={isLogIn} logOutHandler={logOutHandler} location={location} logInEmail={logInEmail}/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeWhomWeHelp/>
            <HomeContactUs/>
        </div>
    )
}

export default Home;