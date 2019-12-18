import React, {useState} from "react";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignIn from "./components/SingIn";
import LogOut from './components/LogOut';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

function App() {

    const [isLogIn, setIsLogIn] = useState(true);

    const logInHandler = () => {
        setIsLogIn(true);
    };

    const logOutHandler = () => {
        setIsLogIn(false);
    };

    return (
        <HashRouter>
            <>
                <Route exact path='/'>
                    <Home isLogIn={isLogIn} logInHandler={logInHandler} logOutHandler={logOutHandler} location={location.pathname}/>
                </Route>
                <Route exact path='/logIn'>
                    <LogIn isLogIn={isLogIn} logInHandler={logInHandler}/>
                </Route>
                <Route exact path='/signIn'>
                    <SignIn isLogIn={isLogIn}/>
                </Route>
                <Route exact path='/logOut'>
                    <LogOut isLogIn={isLogIn}/>
                </Route>
            </>
        </HashRouter>
    )
}

export default App;