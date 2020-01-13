import React from "react";
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import {NavLink} from "react-router-dom";

const MobileHomeMenu = (props) => {

    const {handlerMenuClick, burgerMenuIsOn} = props;

    return (
      <div className='mobileHomeMenu'>
          <img className='logo' src='../../../assets/Home-Hero-Image.jpg'/>
          <div className='burgerMenuIcon' onClick={handlerMenuClick}>
              <div className='burgerLevel'></div>
              <div className='burgerLevel'></div>
              <div className='burgerLevel'></div>
          </div>
          {burgerMenuIsOn && <div className='burgerMenu'>
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
          </div> }
      </div>
    )
};

export default MobileHomeMenu;