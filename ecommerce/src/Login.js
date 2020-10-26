import React, {useState } from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import { auth } from './firebase';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = () =>{
        Event.preventDefault(); //this will stop the refresh
        //do login logic 
        auth.signInWithEmailAndPassword(email,password).then((auth) => {
            //logged in, redirect to home page
        })
        .catch(e => alert(e.message))
    }

    const register = () =>{
        Event.preventDefault(); //this will stop the refresh
        //do register logic

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            //created a user and logged in, redirect to the home page
        })
        .catch(e => alert(e.message))

    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                     src="images/logo.jpg"
                     alt="Logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                   <h5>E-mail</h5>
                   <input value={email} onchange={Event => setEmail(Event.target.value )} type="email"/>
                   <h5>Password</h5>
                   <input value={password} onchange={Event => setPassword(Event.target.value )} type="password"/>
                   <button onClick={login} type="submit" className="login__signInButton">Sign in</button>

                   <p> 
                       By signing-in you agree to Boarnegers's conditions of use & sale. Please see our Privacy Notice, our Cookies Notice
                       and our interest-Based Ads Notice.
                   </p>
                   <button onClick={register} className="login__registerButton">Create your Boarnegers Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
