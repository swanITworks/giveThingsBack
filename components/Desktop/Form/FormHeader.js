import React from "react";
import HomeHeaderMenu from "../Home/HomeHeaderMenu";
import FormHeaderStartInfo from "./FormHeaderStartInfo";


function FormHeader(props) {
    const {logInEmail, isLogIn, logOutHandler, location} = props;
    return (
        <div className='formHeader'>
                <HomeHeaderMenu isLogIn={isLogIn} logOutHandler={logOutHandler} location={location} logInEmail={logInEmail}/>
                <FormHeaderStartInfo/>
        </div>
    )
}

export default FormHeader;