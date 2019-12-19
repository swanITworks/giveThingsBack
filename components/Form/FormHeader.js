import React from "react";
import HomeHeaderMenu from "../Home/HomeHeaderMenu";
import FormHeaderStartInfo from "./FormHeaderStartInfo";


function FormHeader(props) {
    return (
        <div className='formHeader'>
                <HomeHeaderMenu isLogIn={props.isLogIn} logOutHandler={props.logOutHandler} location={props.location}/>
                <FormHeaderStartInfo/>
        </div>
    )
}

export default FormHeader;