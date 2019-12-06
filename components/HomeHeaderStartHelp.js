import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

function HomeHeaderStartHelp() {
    return (
        <div className='homeHeaderStartHelp'>
            <h1>Start help now!</h1>
            <h2>Give back stuff to good hands.</h2>
            <img src='../assets/Decoration.svg'/>
            <div className='homeHeaderStartHelpButtons'>
                <NavLink exact to="/" activeClassName="active" className='button'>GIVE BACK STUFF</NavLink>
                <NavLink exact to="/" activeClassName="active" className='button'>ORGANIZE COLLECTION</NavLink>
            </div>
        </div>
    )
}

export default HomeHeaderStartHelp;