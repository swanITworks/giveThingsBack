import React from "react";
import HomeHeaderMenu from "./HomeHeaderMenu";
import HomeHeaderStartHelp from "./HomeHeaderStartHelp";

function HomeHeader(props) {
    return (
        <div className='header'>
                <HomeHeaderMenu isLogIn={props.isLogIn} logOutHandler={props.logOutHandler} location={props.location}/>
                <HomeHeaderStartHelp/>
        </div>
    )
}

export default HomeHeader;