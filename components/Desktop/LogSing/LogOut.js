import React from "react";
import HomeHeaderMenu from "../Home/HomeHeaderMenu";
import {NavLink} from "react-router-dom";

function LogOut(props) {
    return (
        <div className='logOut'>
            <HomeHeaderMenu isLogIn = {props.isLogIn}/>
            <div className='logInHeader'>
                <h1>You have been logged out.</h1>
                <img src='../../../assets/Decoration.svg'/>
                <NavLink exact to="/" activeClassName="active" className='button'>Start</NavLink>
            </div>
        </div>
    )
}
export default LogOut;