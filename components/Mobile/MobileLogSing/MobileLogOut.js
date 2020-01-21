import React from "react";
import {NavLink} from "react-router-dom";
import MobileHomeMenu from "../Home/MobileHomeMenu";

function LogOut(props) {
    return (
        <div className='mobileLogOut'>
            <MobileHomeMenu isLogIn = {props.isLogIn}/>
            <div className='logInHeader'>
                <h1>You have been logged out.</h1>
                <NavLink exact to="/" activeClassName="active" className='button'>Start</NavLink>
            </div>
        </div>
    )
}
export default LogOut;