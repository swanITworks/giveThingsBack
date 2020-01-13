import React, {useState} from "react";
import MobileHomeMenu from "./MobileHomeMenu";
import MobileHomeHeader from "./MobileHomeHeader";
import MobileHomeFourSteps from "./MobileHomeFourSteps";
import MobileHomeWhoWeHelp from "./MobileHomeWhoWeHelp";
import MobileHomeSignIn from "./MobileHomeSignIn";
import MobileHomeContact from "./MobileHomeContact";


function MobileHome(props) {

    const [burgerMenuIsOn, setBurgerMenuIsOn] = useState(false);

    const handlerMenuClick = () => {
        setBurgerMenuIsOn(prevState => !prevState)
    };

    const {logInEmail, location, logOutHandler, isLogIn} = props;
    return (
        <div className='mainContainerMobile'>
            <MobileHomeMenu isLogIn={isLogIn} logOutHandler={logOutHandler} location={location} logInEmail={logInEmail}
                            handlerMenuClick={handlerMenuClick} burgerMenuIsOn={burgerMenuIsOn}/>
            <MobileHomeHeader/>
            <MobileHomeFourSteps/>
            <MobileHomeWhoWeHelp/>
            <MobileHomeSignIn/>
            <MobileHomeContact/>
        </div>
    )
}

export default MobileHome;