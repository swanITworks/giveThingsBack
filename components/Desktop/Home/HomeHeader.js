import React from "react";
import HomeHeaderMenu from "./HomeHeaderMenu";
import HomeHeaderStartHelp from "./HomeHeaderStartHelp";

function HomeHeader(props) {
    const {logInEmail, location, logOutHandler, isLogIn} = props;
    return (
        <div className='homeHeader'>
            <div className='leftSide'>
                <div className='image'></div>
            </div>
            <div className='rightSide'>
                <HomeHeaderMenu isLogIn={isLogIn} logOutHandler={logOutHandler} location={location} logInEmail={logInEmail}/>
                <HomeHeaderStartHelp/>
            </div>
        </div>
    )
}

export default HomeHeader;