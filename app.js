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
} from 'react-router-dom';

const logInDataTemplate = {
    login: '',
    warningLogin: '',
    password: '',
    warningPassword: '',
    status:'',
    email:'',
};

function App() {

    const [logInData, setLogInData] = useState(logInDataTemplate);
    const [isLogIn, setIsLogIn] = useState(false);

    const db = firebase.firestore();

    const handlerOnSubmit = () => {

        const conditionLoginFirst = logInData.login.length >= 4;
        const conditionLoginSecond = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(logInData.login) === false;
        const conditionPasswordFirst = logInData.password.length >= 6;

        if (conditionLoginFirst && conditionLoginSecond === false && conditionPasswordFirst) {
            handlerCheckUser();
        } else {
            if (conditionLoginFirst === false || conditionLoginSecond === true) {
                setLogInData(prevState =>
                    ({
                        ...prevState,
                        warningLogin: <div className='warning'>Email is incorrect</div>
                    })
                )
            }
            if (conditionPasswordFirst === false) {
                setLogInData(prevState =>
                    ({
                        ...prevState,
                        warningPassword: <div className='warning'>Password is incorrect</div>
                    })
                )
            } else {
                setLogInData(prevState =>
                    ({
                        ...prevState,
                        warningPassword:'',
                    })
                )
            }
        }
    };

    const handlerCheckUser = () => {
        db.collection('users')
            .where('login', '==', logInData.login)
            .where('password', '==', logInData.password)
            .get()
            .then(function (querySnapshot) {
                if (querySnapshot.docs.length !== 0) {
                    logInHandler();
                }
            })
    };

    const logInHandler = () => {
        setIsLogIn(true);
        setLogInData(prevState => (
            {
                ...prevState,
                email: logInData.login,
                login: '',
                password: '',
                success: <div className='success'>Your are login</div>,
                warningPassword:'',
                warningLogin: '',
            }
        ))
    };

    const logOutHandler = () => {
        setIsLogIn(false);
        setLogInData(prevState => (
            {
                ...prevState,
                login: '',
                password: '',
                success:'',
            }
        ))
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
                          location={location.pathname} logInEmail={logInData.email}/>
                </Route>
                <Route exact path='/logIn'>
                    <LogIn isLogIn={isLogIn} logInHandler={logInHandler} handlerLogInInputs={handlerLogInInputs}
                           handlerOnSubmit={handlerOnSubmit} logInData={logInData}/>
                </Route>
                <Route exact path='/signIn'>
                    <SignIn isLogIn={isLogIn}/>
                </Route>
                <Route exact path='/logOut'>
                    <LogOut isLogIn={isLogIn}/>
                </Route>
                <Route exact path='/form'>
                    {isLogIn === true ?
                        <Form isLogIn={isLogIn} logOutHandler={logOutHandler} logInLogin={logInData.login}
                              logInPass={logInData.password} logInEmail={logInData.email}/>
                        :
                        <LogIn isLogIn={isLogIn} logInHandler={logInHandler} logInData={logInData}/>
                    }
                </Route>
            </>
        </HashRouter>
    )
}

export default App;