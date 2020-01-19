import React from "react";
import MobileHomeMenu from "../Home/MobileHomeMenu";
import {NavLink} from "react-router-dom";
import MobileHome from "../Home/MobileHome";

function MobileLogIn(props) {

    const {handlerLogInInputs, handlerOnSubmit, logInData, handlerMenuClick, burgerMenuIsOn} = props;

    return (
        <div className='mobileLogIn'>
            <MobileHomeMenu burgerMenuIsOn={burgerMenuIsOn} handlerMenuClick={handlerMenuClick} isLogIn={props.isLogIn} logInHandler={props.logInHandler} logInEmail={logInData.email}/>
            <div className='logInHeader'>
                <h1>Log In</h1>
                {logInData.success}
            </div>
            <form>
                <div className='logInBox'>
                    <label>Email</label><input
                    style={logInData.warningLogin !== '' ? {borderBottom: '1px solid #960c0c'} : null} type='email'
                    name='login' value={logInData.login} onChange={handlerLogInInputs}/>
                    {logInData.warningLogin}
                    <label>Password</label><input
                    style={logInData.warningLogin !== '' ? {borderBottom: '1px solid #960c0c'} : null}
                    type='password' name='password' value={logInData.password} onChange={handlerLogInInputs}/>
                    {logInData.warningPassword}
                </div>
                <div className='logInButtons'>
                    <NavLink exact to="/signIn" activeClassName="active" className='button'>Sign in</NavLink>
                    <NavLink exact to="/form" onClick={handlerOnSubmit} className='button'>Log In</NavLink>
                </div>
            </form>
        </div>
    )
}

export default MobileLogIn;