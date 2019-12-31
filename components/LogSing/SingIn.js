import React, {useState} from "react";
import HomeHeaderMenu from "../Home/HomeHeaderMenu";
import {NavLink} from "react-router-dom";
import firebase from "../../config";

const signInInputsTemplate = {
    logIn: '',
    password: '',
    passwordRepeat: '',
};

function SignIn(props) {
    const [signInInputs, setSignInInputs] = useState(signInInputsTemplate);
    const isLogIn = props.isLogIn;

    const handlerSignInInputsChange = (e) => {
        const {value, name} = e.target;
        setSignInInputs({...signInInputs, [name]: value});
    };

    const handlerSignIn = () => {
        const db = firebase.firestore();
        db.collection('users')
            .doc(signInInputs.logIn)
            .set({
                login: signInInputs.logIn,
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
            <form>
                <div className='logInBox'>
                    <label>Email</label><input type='email' name='logIn' value={signInInputs.logIn}
                                               onChange={handlerSignInInputsChange}/>
                    <label>Password</label><input type='password' name='password' value={signInInputs.password}
                                                  onChange={handlerSignInInputsChange}/>
                    <label>Repeat Password</label><input type='password' name='passwordRepeat'
                                                         value={signInInputs.passwordRepeat}
                                                         onChange={handlerSignInInputsChange}/>
                </div>
                <div className='logInButtons'>
                    <NavLink exact to="/logIn" activeClassName="active" className='button'>Log in</NavLink>
                    <NavLink onClick={handlerSignIn} exact to="/signIn" activeClassName="active" className='button'>Sign in</NavLink>
                </div>
            </form>
        </div>
    )
}

export default SignIn;