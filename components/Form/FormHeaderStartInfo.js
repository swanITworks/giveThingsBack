import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

function FormHeaderStartInfo() {
    return (
        <div className='formHeaderStartInfo'>
            <h1>Give back the stuff<br/>you don't want anymore<br/>PEOPLE IN NEED</h1>
            <img src='../../assets/Decoration.svg'/>
            <h2>4 steps are enough:</h2>
            <div className='formHeaderStartInfoSteps'>
                <div className='rectangle'>
                    <h2>1</h2>
                    <p>Choose stuff</p>
                </div>
                <div className='rectangle'>
                    <h2>2</h2>
                    <p>Pack to bag</p>
                </div>
                <div className='rectangle'>
                    <h2>3</h2>
                    <p>Choose foundation</p>
                </div>
                <div className='rectangle'>
                    <h2>4</h2>
                    <p>Order collection</p>
                </div>
            </div>
        </div>
    )
}

export default FormHeaderStartInfo;