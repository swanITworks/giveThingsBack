import React from "react";
import {Link} from 'react-scroll'

const MobileHomeMenu = (props) => {

    const {handlerMenuClick, burgerMenuIsOn} = props;

    const showMenu = () => {
        if (burgerMenuIsOn === true) {
            return (
                <div className='burgerMenu'>
                    <>
                        <li><Link exact to="fourSteps" className='menuButton' spy={true}
                                  smooth={true}
                                  duration={500}>What
                            about?</Link></li>
                        <li><Link exact to="whomWeHelp" className='menuButton' spy={true}
                                  smooth={true}
                                  duration={500}>Fundations and
                            Organizations</Link></li>
                        <li><Link exact to="contact" className='menuButton' spy={true}
                                  smooth={true}
                                  duration={500}>Contact</Link></li>
                    </>
                </div>
            )
        } else if (burgerMenuIsOn === false) {
            return (
                <div className='burgerMenuHide'>
                    <>
                        <li><Link exact to="fourSteps" className='menuButton' spy={true}
                                  smooth={true}
                                  duration={500}>What
                            about?</Link></li>
                        <li><Link exact to="whomWeHelp" className='menuButton' spy={true}
                                  smooth={true}
                                  duration={500}>Fundations and
                            Organizations</Link></li>
                        <li><Link exact to="contact" className='menuButton' spy={true}
                                  smooth={true}
                                  duration={500}>Contact</Link></li>
                    </>
                </div>
            )
        }
    };

    return (
        <div className='mobileHomeMenu'>
            <img className='logo' src='../../../assets/Home-Hero-Image.jpg'/>
            <div className='burgerMenuIcon' onClick={handlerMenuClick}>
                <div className='burgerLevel'></div>
                <div className='burgerLevel'></div>
                <div className='burgerLevel'></div>
            </div>
            {showMenu()}
        </div>
    )
};

export default MobileHomeMenu;