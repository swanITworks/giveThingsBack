import React from "react";
import {NavLink} from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function HomeHeaderMenu() {
    return (
        <div className='headerMenu'>
            <ul className='homeHeaderLogInMenu'>
                <li>Log in</li>
                <li>Sign in</li>
            </ul>
            <ul className='homeHeaderNavigateMenu'>
                <li><NavLink exact to="/" activeClassName="active" className='menuButton'>Start</NavLink></li>
                <li><Link exact to="/whatAbout" activeClassName="active" className='menuButton'>What about?</Link></li>
                <li><Link exact to="/whatAbout" activeClassName="active" className='menuButton'>About Us</Link></li>
                <li><Link exact to="/whatAbout" activeClassName="active" className='menuButton'>Fundations and Organizations</Link></li>
                <li><Link exact to="/whatAbout" activeClassName="active" className='menuButton'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default HomeHeaderMenu;