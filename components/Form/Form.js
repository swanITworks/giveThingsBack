import React from "react";
import FormHeader from "./FormHeader";
import HomeContactUs from "../Home/HomeContactUs";
import FormSteps from "./FormSteps";

function Form(props) {
    return (
        <div className='mainContainer'>
            <FormHeader isLogIn={props.isLogIn} logOutHandler={props.logOutHandler} location={props.location}/>
            <FormSteps/>
            <HomeContactUs/>
        </div>
    )
}

export default Form;