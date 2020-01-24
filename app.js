import React, {useState} from "react";
import Home from "./components/Desktop/Home/Home";
import SignIn from "./components/Desktop/LogSing/SingIn";
import LogOut from './components/Desktop/LogSing/LogOut';
import Form from './components/Desktop/Form/Form';
import {useMediaQuery} from 'react-responsive';
import firebase from "./config";
import MobileHome from "./components/Mobile/Home/MobileHome";
import MobileLogIn from "./components/Mobile/MobileLogSing/MobileLogIn";
import LogIn from "./components/Desktop/LogSing/LogIn";
import MobileSignIn from "./components/Mobile/MobileLogSing/MobileSignIn";
import MobileForm from "./components/Mobile/MobileForm/MobileForm";
import MobileLogOut from "./components/Mobile/MobileLogSing/MobileLogOut";
import FormSteps from "./components/Desktop/Form/FormSteps";

import {
    HashRouter,
    Route,
} from 'react-router-dom';
import MobileHomeMenu from "./components/Mobile/Home/MobileHomeMenu";
import MobileHomeContact from "./components/Mobile/Home/MobileHomeContact";


const logInDataTemplate = {
    login: '',
    warningLogin: '',
    password: '',
    warningPassword: '',
    status: '',
    email: '',
};

const DesktopAndTablet = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 768});
    return isDesktop ? children : null
};

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 767});
    return isMobile ? children : null
};

function App() {
    const [logInData, setLogInData] = useState(logInDataTemplate);
    const [isLogIn, setIsLogIn] = useState(false);
    const db = firebase.firestore();
    const [burgerMenuIsOn, setBurgerMenuIsOn] = useState(null);

    const handlerMenuClick = () => {
        if (burgerMenuIsOn === null) {
            setBurgerMenuIsOn(true)
        } else (
            setBurgerMenuIsOn(prevState => !prevState)
        )
    };

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
                        warningLogin: <div className='logInWarnings'>Email is incorrect</div>
                    })
                )
            }
            if (conditionPasswordFirst === false) {
                setLogInData(prevState =>
                    ({
                        ...prevState,
                        warningPassword: <div className='logInWarnings'>Password is incorrect</div>
                    })
                )
            } else {
                setLogInData(prevState =>
                    ({
                        ...prevState,
                        warningPassword: '',
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
        setLogInData(prevState => (
            {
                ...prevState,
                email: logInData.login,
                login: '',
                password: '',
                success: <div className='success'>Your are login</div>,
                warningPassword: '',
                warningLogin: '',
            }
        ));
        setIsLogIn(true);
    };

    const logOutHandler = () => {
        setIsLogIn(false);
        setLogInData(prevState => (
            {
                ...prevState,
                login: '',
                password: '',
                success: '',
            }
        ))
    };

    const handlerLogInInputs = (e) => {
        const {name, value} = e.target;
        setLogInData(prevState => ({...prevState, [name]: value}));
    };

    return (
        <HashRouter>
            <DesktopAndTablet>
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
                        <LogIn isLogIn={isLogIn} logInHandler={logInHandler}
                               handlerLogInInputs={handlerLogInInputs}
                               handlerOnSubmit={handlerOnSubmit} logInData={logInData}/>
                    }
                </Route>
                <Route exact path='/signedIn'>
                    {isLogIn === true ?
                        <Form isLogIn={isLogIn} logOutHandler={logOutHandler} logInLogin={logInData.login}
                              logInPass={logInData.password} logInEmail={logInData.email}/>
                        :
                        <LogIn isLogIn={isLogIn} logInHandler={logInHandler}
                               handlerLogInInputs={handlerLogInInputs}
                               handlerOnSubmit={handlerOnSubmit} logInData={logInData}/>
                    }
                </Route>
            </DesktopAndTablet>
            <Mobile>
                <Route exact path='/'>
                    <MobileHome isLogIn={isLogIn} logInHandler={logInHandler} logOutHandler={logOutHandler}
                                location={location.pathname} logInEmail={logInData.email}
                                handlerMenuClick={handlerMenuClick} burgerMenuIsOn={burgerMenuIsOn}/>
                </Route>
                <Route exact path='/logIn'>
                    <MobileLogIn isLogIn={isLogIn} logInHandler={logInHandler} handlerLogInInputs={handlerLogInInputs}
                                 handlerOnSubmit={handlerOnSubmit} logInData={logInData}
                                 handlerMenuClick={handlerMenuClick} burgerMenuIsOn={burgerMenuIsOn}/>
                </Route>
                <Route exact path='/signIn'>
                    <MobileSignIn isLogIn={isLogIn}/>
                </Route>
                <Route exact path='/signedIn'>
                    {isLogIn === true ?
                        <MobileForm isLogIn={isLogIn} logOutHandler={logOutHandler} logInLogin={logInData.login}
                                    logInPass={logInData.password} logInEmail={logInData.email}
                                    handlerMenuClick={handlerMenuClick} burgerMenuIsOn={burgerMenuIsOn}/>
                        :
                        <MobileLogIn isLogIn={isLogIn} logInHandler={logInHandler}
                                     handlerLogInInputs={handlerLogInInputs}
                                     handlerOnSubmit={handlerOnSubmit} logInData={logInData}/>
                    }
                </Route>
                <Route exact path='/form'>
                    {isLogIn === true ?
                        <>
                            <MobileHomeMenu isLogIn={isLogIn} logOutHandler={logOutHandler} location={location} logInEmail={logInData.email}
                                            handlerMenuClick={handlerMenuClick} burgerMenuIsOn={burgerMenuIsOn}/>
                            <FormSteps isLogIn={isLogIn} logOutHandler={logOutHandler} logInLogin={logInData.login}
                                       logInPass={logInData.password} logInEmail={logInData.email}/>
                            <MobileHomeContact/>
                        </>
                        :
                        <MobileLogIn isLogIn={isLogIn} logInHandler={logInHandler}
                                     handlerLogInInputs={handlerLogInInputs}
                                     handlerOnSubmit={handlerOnSubmit} logInData={logInData}/>
                    }
                </Route>
                <Route exact path='/logOut'>
                    <MobileLogOut isLogIn={isLogIn}/>
                </Route>
            </Mobile>
        </HashRouter>

    )
}

export default App;