import React from "react";
import MobileHomeMenu from "./MobileHomeMenu";
import MobileHomeHeader from "./MobileHomeHeader";


function MobileHome(props) {
    const {logInEmail, location, logOutHandler, isLogIn} = props;
    return (
        <div className='mainContainerMobile'>
            <MobileHomeMenu isLogIn={isLogIn} logOutHandler={logOutHandler} location={location} logInEmail={logInEmail}/>
            <MobileHomeHeader/>
        </div>
    )
}

export default MobileHome;