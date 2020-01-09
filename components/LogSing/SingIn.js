import React, {useEffect, useState} from "react";
import HomeHeaderMenu from "../Home/HomeHeaderMenu";
import {NavLink} from "react-router-dom";
import firebase from "../../config";

const signInInputsTemplate = {
    email: '',
    warningLogin: ' ',
    password: '',
    warningPassword: ' ',
    passwordRepeat: '',
    warningPasswordRepeat: ' ',
    validationChanger: false,
    statusInfo: '',
};

const db = firebase.firestore();

function SingIn(props) {
    const [signInInputs, setSignInInputs] = useState(signInInputsTemplate);
    const isLogIn = props.isLogIn;

    const handlerSignInInputsChange = (e) => {
        const {value, name} = e.target;
        setSignInInputs({...signInInputs, [name]: value});
    };

    useEffect(() => {
        if (signInInputs.warningLogin === '' && signInInputs.warningPassword === '' && signInInputs.warningPasswordRepeat === '') {
            checkUserIfExistAndThenSend();
        }
    }, [signInInputs.validationChanger]);

    const handlerSignIn = (e) => {
        e.preventDefault();
        if (signInInputs.email.length <= 4 || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signInInputs.email) === false)) {
            setSignInInputs(prevState => ({
                ...prevState,
                warningLogin: <div className='signInWarnings'>Email is to short, should have minimum 4 characters and
                    include '@' and '.'</div>,
                validationChanger: !prevState.validationChanger,
            }))
        } else {
            setSignInInputs(prevState => ({
                ...prevState,
                warningLogin: '',
                validationChanger: !prevState.validationChanger,
            }))
        }
        if (signInInputs.password.length < 6) {
            setSignInInputs(prevState => ({
                ...prevState,
                warningPassword: <div className='signInWarnings'>Password is to short, should have minimum 6
                    characters</div>,
                validationChanger: !prevState.validationChanger,
            }))
        } else {
            setSignInInputs(prevState => ({
                ...prevState,
                warningPassword: '',
                validationChanger: !prevState.validationChanger,
            }))
        }
        if (signInInputs.password !== signInInputs.passwordRepeat) {
            setSignInInputs(prevState => ({
                ...prevState,
                warningPasswordRepeat: <div className='signInWarnings'>Repetition should be the same like
                    password</div>,
                validationChanger: !prevState.validationChanger,
            }))
        } else {
            setSignInInputs(prevState => ({
                ...prevState,
                warningPasswordRepeat: '',
                validationChanger: !prevState.validationChanger,
            }))
        }
    };

    const sendData = () => {
        db.collection('users')
            .doc(signInInputs.email)
            .set({
                login: signInInputs.email,
                password: signInInputs.password,
            })
            .then(function () {
                console.log("Document successfully written!");
                setSignInInputs(prevState => (
                        {
                            ...prevState,
                            email: '',
                            password: '',
                            passwordRepeat: '',
                            statusInfo: <div className='success'>Your account was created. Please log in</div>
                        }
                    )
                )
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    };

    const checkUserIfExistAndThenSend = () => {
        db.collection('users')
            .where('login', '==', signInInputs.email)
            .get()
            .then(function (querySnapshot) {
                if (querySnapshot.docs.length !== 0) {
                    setSignInInputs(
                        prevState => (
                            {
                                ...prevState,
                                password: '',
                                passwordRepeat: '',
                                statusInfo: <div className='exist'>This login email: {signInInputs.email} has been exist yet, please log in or use another email address</div>,
                                email:'',
                            }
                        )
                    )
                } else sendData()
            })
    };

    return (
        <div className='signIn'>
            <HomeHeaderMenu isLogIn={isLogIn}/>
            <div className='signInHeader'>
                <h1>Sign In</h1>
                <img src='../../assets/Decoration.svg'/>
                {signInInputs.statusInfo !== '' ? signInInputs.statusInfo : null}
            </div>
            <form onSubmit={handlerSignIn}>
                <div className='signInBox'>
                    <label>Email</label><input type='text' name='email' value={signInInputs.email}
                                               onChange={handlerSignInInputsChange}/>{signInInputs.warningLogin}
                    <label>Password</label><input type='password' name='password' value={signInInputs.password}
                                                  onChange={handlerSignInInputsChange}/>{signInInputs.warningPassword}
                    <label>Repeat Password</label><input type='password' name='passwordRepeat'
                                                         value={signInInputs.passwordRepeat}
                                                         onChange={handlerSignInInputsChange}/>{signInInputs.warningPasswordRepeat}
                </div>
                <div className='signInButtons'>
                    <NavLink exact to="/logIn" activeClassName="active" className='button'>Log in</NavLink>
                    <button type='submit' activeClassName="active" className='button'>Sign
                        in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SingIn;