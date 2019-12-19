import React from "react";
import HomeHeaderMenu from "../Home/HomeHeaderMenu";
import {NavLink} from "react-router-dom";

function SignIn(props) {
    return (
        <div className='logIn'>
            <HomeHeaderMenu isLogIn = {props.isLogIn}/>
            <div className='logInHeader'>
                <h1>Sign In</h1>
                <img src='../../assets/Decoration.svg'/>
            </div>
            <form>
                <div className='logInBox'>
                    <label>Email</label><input type='email'/>
                    <label>Password</label><input type='password'/>
                    <label>Repeat Password</label><input type='password'/>
                </div>
                <div className='logInButtons'>
                    <NavLink exact to="/logIn" activeClassName="active" className='button'>Log in</NavLink>
                    <NavLink exact to="/signIn" activeClassName="active" className='button'>Sign in</NavLink>

                </div>
            </form>
        </div>
    )
}

export default SignIn;