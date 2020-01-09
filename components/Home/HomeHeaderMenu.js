import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import * as Scroll from 'react-scroll';
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import { HashLink } from 'react-router-hash-link';
function HomeHeaderMenu(props) {

    const checkIsLogin = (check) => {
        if (check === false) {
            return (
                <>
                    <li><NavLink exact to="/logIn" activeClassName="active" className='menuButton'>Log in</NavLink></li>
                    <li><NavLink exact to="/signIn" activeClassName="active" className='menuButton'>Sign in</NavLink>
                    </li>
                </>
            )
        } else if (check === true) {
            return (<>
                    <li>Hello! {props.logInEmail}</li>
                    <li><NavLink exact to="/form" activeClassName="active" className='menuButton'>Give Back Stuff</NavLink>
                    </li>
                    <li><NavLink onClick={props.logOutHandler} exact to="/logOut" activeClassName="active"
                                 className='menuButton'>Log Out</NavLink></li>
                </>
            )
        }
    };

    return (
        <div className='headerMenu'>
            <ul className='homeHeaderLogInMenu'>
                {checkIsLogin(props.isLogIn)}
            </ul>
            <ul className='homeHeaderNavigateMenu'>
                {props.location === '/' ?
                    <>
                        <li><NavLink exact to="/" activeClassName="active" className='menuButton'>Start</NavLink></li>
                        <li><Link exact to="fourSteps" activeClassName="active" className='menuButton' spy={true}
                                  smooth={true}
                                  duration={500}>What
                            about?</Link></li>
                        <li><Link exact to="aboutUs" activeClassName="active" className='menuButton' spy={true}
                                  smooth={true}
                                  duration={500}>About Us</Link>
                        </li>
                        <li><Link exact to="whomWeHelp" activeClassName="active" className='menuButton' spy={true}
                                  smooth={true}
                                  duration={500}>Fundations and
                            Organizations</Link></li>
                        <li><Link exact to="contactUs" activeClassName="active" className='menuButton' spy={true}
                                  smooth={true}
                                  duration={500}>Contact</Link></li>
                    </>
                    :
                    <>
                        <li><NavLink exact to="/" activeClassName="active" className='menuButton'>Start</NavLink></li>
                        <li><HashLink to="/#fourSteps" activeClassName="active" className='menuButton'>What
                            about?</HashLink></li>
                        <li><HashLink to="/#aboutUs" activeClassName="active" className='menuButton'>About Us</HashLink>
                        </li>
                        <li><HashLink to="/#whomWeHelp" activeClassName="active" className='menuButton'>Fundations and
                            Organizations</HashLink></li>
                        <li><Link exact to="contactUs" activeClassName="active" className='menuButton' spy={true}
                                  smooth={true}
                                  duration={500}>Contact</Link></li>
                    </>
                }
            </ul>
        </div>
    )
}

export default HomeHeaderMenu;