import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

import './Login.css';
import { useStateValue } from './StateProvider';
function Login() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [noEmail, setNoEmail] = useState(false);
    const [noPassword, setNoPassword] = useState(false);

    const signIn = e => {
        e.preventDefault();
        //Firebase login
        if (email && password) {
            auth.signInWithEmailAndPassword(email, password)
                .then(auth => {
                    if (auth) {
                        if (basket.length === 0) {
                            history.push('/')
                        } else {
                            history.push('/payment')
                        }
                    }
                })
                .catch(err => alert(err.message))
        } else {
            if (!email) {
                setNoEmail(true);
            }
            if (!password) {
                setNoPassword(true);
            }
        }
    }


    const emailChangeHandler = e => {
        email ? setNoEmail(false) : setNoEmail(true);
        setEmail(e.target.value);
    }

    const passwordChangeHandler = e => {
        password ? setNoPassword(false) : setNoPassword(true);
        setPassword(e.target.value);
    }


    return (
        <div className="login">
            <Link to="/">
                <img
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon Logo"
                    className="login__logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={emailChangeHandler} className={`login__input ${noEmail ? 'login__noEmail' : null}`} />
                    {noEmail && <p className="login__error">Enter your email</p>}
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={passwordChangeHandler} className={noPassword ? 'login__noPassword' : null} />
                    {noPassword && <p className="login__error">Enter your password</p>}

                    <button onClick={signIn} type="submit" className="login__signInButton">Sign In</button>

                    <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &amp; Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                    </p>

                </form>
            </div>
            <div className="login__register">
                <p>New to Amazon Clone?</p>
                <Link to="/register">
                    <button className="login__registerButton">Create your Amazon Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
