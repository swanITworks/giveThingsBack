import React from "react";
import HomeHeaderMenu from "../Home/HomeHeaderMenu";
import {NavLink} from "react-router-dom";

function LogIn(props) {
    return (
        <div className='logIn'>
            <HomeHeaderMenu isLogIn = {props.isLogIn} logInHandler={props.logInHandler}/>
            <div className='logInHeader'>
                <h1>Log In</h1>
                <img src='../../assets/Decoration.svg'/>
            </div>
            <form>
                <div className='logInBox'>
                        <label>Email</label><input type='email'/>
                        <label>Password</label><input type='password'/>
                </div>
                <div className='logInButtons'>
                    <NavLink exact to="/signIn" activeClassName="active" className='button'>Sign in</NavLink>
                    <NavLink exact to='/' onClick={props.logInHandler} className='button'>Log In</NavLink>
                </div>
            </form>
        </div>
    )
}

export default LogIn;