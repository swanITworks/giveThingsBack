import React, {useState} from "react";
import HomeHeaderMenu from "../Home/HomeHeaderMenu";
import {NavLink} from "react-router-dom";
import firebase from "../../config";

const signInInputsTemplate = {
    email: '',
    warningLogin: '',
    password: '',
    warningPassword: '',
    passwordRepeat: '',
    warningPasswordRepeat: '',
    validationChanger: false,
};

function SignIn(props) {
    const [signInInputs, setSignInInputs] = useState(signInInputsTemplate);
    const isLogIn = props.isLogIn;

    const handlerSignInInputsChange = (e) => {
        const {value, name} = e.target;
        setSignInInputs({...signInInputs, [name]: value});
    };

    const handlerSignIn = (e) => {
        e.preventDefault();
        if (signInInputs.email.length <= 2) {
            setSignInInputs(prevState => ({
                ...prevState,
                warningLogin: <div>Login is to short, should have minimum 2 characters</div>,
            }))
        }


    };

    const sendData = () => {
        const db = firebase.firestore();
        db.collection('users')
            .doc(signInInputs.login)
            .set({
                login: signInInputs.email,
                password: signInInputs.password,
            }).then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    };

    return (
        <div className='logIn'>
            <HomeHeaderMenu isLogIn={isLogIn}/>
            <div className='logInHeader'>
                <h1>Sign In</h1>
                <img src='../../assets/Decoration.svg'/>
            </div>
            <form onSubmit={handlerSignIn}>
                <div className='logInBox'>
                    <label>Email</label><input type='text' name='email' value={signInInputs.email}
                                               onChange={handlerSignInInputsChange}/>{signInInputs.warningLogin}
                    <label>Password</label><input type='password' name='password' value={signInInputs.password}
                                                  onChange={handlerSignInInputsChange}/>
                    <label>Repeat Password</label><input type='password' name='passwordRepeat'
                                                         value={signInInputs.passwordRepeat}
                                                         onChange={handlerSignInInputsChange}/>
                </div>
                <div className='logInButtons'>
                    <NavLink exact to="/logIn" activeClassName="active" className='button'>Log in</NavLink>
                    <button type='submit' activeClassName="active" className='button'>Sign
                        in</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;