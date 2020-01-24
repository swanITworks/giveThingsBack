import React from "react";
import HomeHeaderMenu from "../Home/HomeHeaderMenu";
import FormHeaderStartInfo from "./FormHeaderStartInfo";


function FormHeader(props) {
    const {logInEmail, isLogIn, logOutHandler, location} = props;
    return (
        <div className='formHeader'>
            <div className='leftSide'>
                <div className='image'></div>
            </div>
            <div className='rightSide'>
                <HomeHeaderMenu isLogIn={isLogIn} logOutHandler={logOutHandler} location={location} logInEmail={logInEmail}/>
                <FormHeaderStartInfo/>
            </div>
        </div>
    )
}

export default FormHeader;