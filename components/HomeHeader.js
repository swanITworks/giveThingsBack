import React from "react";
import HomeHeaderMenu from "./HomeHeaderMenu";
import HomeHeaderStartHelp from "./HomeHeaderStartHelp";

function HomeHeader() {
    return (
        <div className='header'>
            <div id='headerMainPhoto'></div>
            <div className='headerRightSide'>
            <HomeHeaderMenu/>
            <HomeHeaderStartHelp/>
            </div>
        </div>
    )
}

export default HomeHeader;