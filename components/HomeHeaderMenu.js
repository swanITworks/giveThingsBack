import React from "react";
import {NavLink} from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function HomeHeaderMenu() {
    return (
        <div className='headerMenu'>
            <ul className='homeHeaderLogInMenu'>
                <li><NavLink exact to="/logIn" activeClassName="active" className='menuButton' >Log in</NavLink></li>
                <li><NavLink exact to="/signIN" activeClassName="active" className='menuButton'>Sign in</NavLink></li>
            </ul>
            <ul className='homeHeaderNavigateMenu'>
                <li><NavLink exact to="/" activeClassName="active" className='menuButton'>Start</NavLink></li>
                <li><Link exact to="fourSteps" activeClassName="active" className='menuButton'>What about?</Link></li>
                <li><Link exact to="aboutUs" activeClassName="active" className='menuButton'>About Us</Link></li>
                <li><Link exact to="whomWeHelp" activeClassName="active" className='menuButton'>Fundations and Organizations</Link></li>
                <li><Link exact to="contactUs" activeClassName="active" className='menuButton' spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default HomeHeaderMenu;