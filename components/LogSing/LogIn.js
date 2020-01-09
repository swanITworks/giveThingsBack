import React from "react";
import HomeHeaderMenu from "../Home/HomeHeaderMenu";
import {NavLink} from "react-router-dom";

function LogIn(props) {

    const {handlerLogInInputs, handlerOnSubmit, logInData} = props;

    return (
        <div className='logIn'>
            <HomeHeaderMenu isLogIn={props.isLogIn} logInHandler={props.logInHandler} logInEmail={logInData.email}/>
            <div className='logInHeader'>
                <h1>Log In</h1>
                <img src='../../assets/Decoration.svg'/>
                {logInData.success}
            </div>
            <form>
                <div className='logInBox'>
                    <label>Email</label><input type='email' name='login' value={logInData.login} onChange={handlerLogInInputs}/>
                    {logInData.warningLogin}
                    <label>Password</label><input type='password' name='password' value={logInData.password} onChange={handlerLogInInputs}/>
                    {logInData.warningPassword}
                </div>
                <div className='logInButtons'>
                    <NavLink exact to="/signIn" activeClassName="active" className='button'>Sign in</NavLink>
                    <NavLink exact to='/logIn' onClick={handlerOnSubmit} className='button'>Log In</NavLink>
                </div>
            </form>
        </div>
    )
}

export default LogIn;