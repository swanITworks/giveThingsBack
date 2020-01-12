import React from "react";
import FormHeader from "./FormHeader";
import HomeContactUs from "../Home/HomeContactUs";
import FormSteps from "./FormSteps";

function Form(props) {
    const {logInLogin, logInEmail, isLogIn, logOutHandler, location, logInPass} = props;
    return (
        <div className='mainContainer'>
            <FormHeader isLogIn={isLogIn} logOutHandler={logOutHandler} location={location} logInLogin={logInLogin} logInEmail={logInEmail}/>
            <FormSteps logInLogin={logInLogin} logInPass={logInPass}/>
            <HomeContactUs/>
        </div>
    )
}

export default Form;