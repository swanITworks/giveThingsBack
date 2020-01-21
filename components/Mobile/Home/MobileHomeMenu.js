import React from "react";
import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";

const MobileHomeMenu = (props) => {

    const {handlerMenuClick, burgerMenuIsOn, isLogIn} = props;

    const checkIsLogin = (check) => {
        if (check === false) {
            return (
                <>
                    <NavLink exact to="/logIn" activeClassName="active" className='menuButton'><i
                        className="fas fa-sign-in-alt"></i></NavLink>
                    <NavLink style={{border: '1px solid #FAD648'}} exact to="/signIn" activeClassName="active"
                             className='menuButton'><i className="fas fa-user-plus"></i></NavLink>

                </>
            )
        } else if (check === true) {
            return (
                <>
                    <div><i className="fas fa-user"></i></div>
                    <NavLink exact to="/signedIn" activeClassName="active" className='menuButton'
                             style={{border: '1px solid #FAD648'}}><i
                        className="fas fa-hand-holding-heart"></i></NavLink>

                    <NavLink style={{border: '0px'}} onClick={props.logOutHandler} exact to="/logOut"
                             className='menuButton'><i className="fas fa-sign-out-alt"></i></NavLink>
                </>
            )
        }
    };

    const showMenu = () => {
        if (burgerMenuIsOn === true) {
            return (
                <div className='burgerMenu'>
                    <>

                        <Link exact to="fourSteps" className='menuButton' spy={true}
                              smooth={true}
                              duration={500}>What
                            about?</Link>
                        <Link exact to="whomWeHelp" className='menuButton' spy={true}
                              smooth={true}
                              duration={500}>Fundations and
                            Organizations</Link>
                        <Link exact to="contact" className='menuButton' spy={true}
                              smooth={true}
                              duration={500}>Contact</Link>
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
            <NavLink exact to="/" activeClassName="active" className='menuButton'>
                <img className='logo' src='../../../assets/Home-Hero-Image.jpg'/></NavLink>
            <div className='rightSide'>
                <div className='userIcons'>
                    {checkIsLogin(isLogIn)}
                </div>
                <div className='burgerMenuIcon' onClick={handlerMenuClick}>
                    <div className='burgerLevel'></div>
                    <div className='burgerLevel'></div>
                    <div className='burgerLevel'></div>
                </div>
            </div>
            {showMenu()}
        </div>
    )
};

export default MobileHomeMenu;