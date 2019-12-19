import React from "react";
import FormHeader from "./FormHeader";
import HomeContactUs from "../Home/HomeContactUs";

function Form(props) {
    return (
        <div className='mainContainer'>
            <FormHeader isLogIn={props.isLogIn} logOutHandler={props.logOutHandler} location={props.location}/>

            <HomeContactUs/>
        </div>
    )
}

export default Form;