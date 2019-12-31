import React from "react";
import FormHeader from "./FormHeader";
import HomeContactUs from "../Home/HomeContactUs";
import FormSteps from "./FormSteps";

function Form(props) {
    const {logInEmail, isLogIn, logOutHandler, location} = props;
    return (
        <div className='mainContainer'>
            <FormHeader isLogIn={isLogIn} logOutHandler={logOutHandler} location={location} logInEmail={logInEmail}/>
            <FormSteps/>
            <HomeContactUs/>
        </div>
    )
}

export default Form;