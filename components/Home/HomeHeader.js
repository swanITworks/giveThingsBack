import React from "react";
import HomeHeaderMenu from "./HomeHeaderMenu";
import HomeHeaderStartHelp from "./HomeHeaderStartHelp";

function HomeHeader(props) {
    const {logInEmail, location, logOutHandler, isLogIn} = props;
    return (
        <div className='header'>
                <HomeHeaderMenu isLogIn={isLogIn} logOutHandler={logOutHandler} location={location} logInEmail={logInEmail}/>
                <HomeHeaderStartHelp/>
        </div>
    )
}

export default HomeHeader;