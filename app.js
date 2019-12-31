import React, {useState} from "react";
import Home from "./components/Home/Home";
import LogIn from "./components/LogSing/LogIn";
import SignIn from "./components/LogSing/SingIn";
import LogOut from './components/LogSing/LogOut';
import Form from './components/Form/Form';
import firebase from "./config";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const logInDataTemplate = {
    login: '',
    password: '',
};

function App() {

    const [logInData, setLogInData] = useState(logInDataTemplate);
    const [isLogIn, setIsLogIn] = useState(true);

    const db = firebase.firestore();
    const handlerCheckUser = () => {
        db.collection('users')
            .where('login', '==', logInData.login)
            .where('password', '==', logInData.password)
            .get()
            .then(function (querySnapshot) {
                if (querySnapshot.docs.length !== 0) {
                    logInHandler();
                    console.log('jest user');
                }
            })
    };

    const logInHandler = () => {
        setIsLogIn(true);
    };

    const logOutHandler = () => {
        setIsLogIn(false);
    };

    const handlerLogInInputs = (e) => {
        const {name, value} = e.target;
        setLogInData(prevState => ({...prevState, [name]: value}));
    };

    return (
        <HashRouter>
            <>
                <Route exact path='/'>
                    <Home isLogIn={isLogIn} logInHandler={logInHandler} logOutHandler={logOutHandler}
                          location={location.pathname} logInEmail={logInData.login}/>
                </Route>
                <Route exact path='/logIn'>
                    <LogIn isLogIn={isLogIn} logInHandler={logInHandler} handlerCheckUser={handlerCheckUser} handlerLogInInputs={handlerLogInInputs}/>
                </Route>
                <Route exact path='/signIn'>
                    <SignIn isLogIn={isLogIn}/>
                </Route>
                <Route exact path='/logOut'>
                    <LogOut isLogIn={isLogIn}/>
                </Route>
                <Route exact path='/form'>
                    {isLogIn === true ?
                        <Form isLogIn={isLogIn} logOutHandler={logOutHandler} logInEmail={logInData.login}/>
                        :
                        <LogIn isLogIn={isLogIn} logInHandler={logInHandler}/>
                    }
                </Route>
            </>
        </HashRouter>
    )
}

export default App;