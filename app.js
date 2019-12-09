import React from "react";
import Home from "./components/Home";
import LogIn from "./components/Login";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <>
            <Route exact path='/' component={Home} />
            <Route exact path='/logIn' component={LogIn} />
            </>
        </HashRouter>
    )
}

export default App;