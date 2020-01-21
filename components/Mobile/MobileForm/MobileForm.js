import React from "react";
// import FormHeader from "./FormHeader";
// import FormSteps from "./FormSteps";
import MobileHomeContact from "../Home/MobileHomeContact";
import MobileHomeMenu from "../Home/MobileHomeMenu";
import MobileHomeFourSteps from "../Home/MobileHomeFourSteps";
import MobileHomeWhoWeHelp from "../Home/MobileHomeWhoWeHelp";
import MobileFormHeader from "./MobileFormHeader";
import MobileFormAction from "./MobileFormAction";

function MobileForm(props) {
    const {logInEmail, isLogIn, logOutHandler, location, handlerMenuClick, burgerMenuIsOn} = props;
    return (
        <div className='mainContainerMobile'>
            <MobileHomeMenu isLogIn={isLogIn} logOutHandler={logOutHandler} location={location} logInEmail={logInEmail}
                            handlerMenuClick={handlerMenuClick} burgerMenuIsOn={burgerMenuIsOn}/>
            <MobileFormHeader/>
            <MobileHomeFourSteps/>
            <MobileHomeWhoWeHelp/>
            <MobileFormAction/>
            <MobileHomeContact/>
        </div>
    )
}

export default MobileForm;