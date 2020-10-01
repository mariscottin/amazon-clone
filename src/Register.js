import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Register() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [noName, setNoName] = useState(false);
    const [noEmail, setNoEmail] = useState(false);
    const [noPassword, setNoPassword] = useState(false);
    const [noCheckPassword, setNoCheckPassword] = useState(false);

    const register = e => {
        e.preventDefault();
        //Firebase register
        if (name && email && password && checkPassword) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    if (auth) {
                        history.push('/');
                    }
                })
                .catch(err => alert(err.message))
        } else {
            if (!name) {
                setNoName(true);
            }
            if (!email) {
                setNoEmail(true);
            }
            if (!password) {
                setNoPassword(true);
            }
            if (!checkPassword) {
                setNoCheckPassword(true);
            }
        }
    }

    const nameChangeHandler = e => {
        name ? setNoName(false) : setNoName(true);
        setName(e.target.value);
    }

    const emailChangeHandler = e => {
        email ? setNoEmail(false) : setNoEmail(true);
        setEmail(e.target.value);
    }

    const passwordChangeHandler = e => {
        password ? setNoPassword(false) : setNoPassword(true);
        setPassword(e.target.value);
    }

    const checkPasswordChangeHandler = e => {
        checkPassword ? setNoCheckPassword(false) : setNoCheckPassword(true);
        setCheckPassword(e.target.value);
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
                <h1>Create Account</h1>
                <form>
                    <h5>Your name</h5>
                    <input type="text" value={name} onChange={nameChangeHandler} className={`login__input ${noName ? 'login__noName' : null}`} />
                    {noName && <p className="login__error">Enter your name</p>}
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={emailChangeHandler} className={`login__input ${noEmail ? 'login__noEmail' : null}`} />
                    {noEmail && <p className="login__error">Enter your email</p>}
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={passwordChangeHandler} className={noPassword ? 'login__noPassword' : null} />
                    {noPassword && <p className="login__error">Enter your password</p>}
                    <h5>Re-enter password</h5>
                    <input type="password" value={checkPassword} onChange={checkPasswordChangeHandler} className={noCheckPassword ? 'login__noCheckPassword' : null} />
                    {noCheckPassword && <p className="login__error">Re-enter password</p>}

                    {/* <button onClick={signIn} type="submit" className="login__signInButton">Sign In</button> */}
                    <button onClick={register} className="login__signInButton">Create your Amazon Account</button>

                    <p>By creating an account, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice.
                    </p>

                </form>
            </div>
            <div className="login__register">
                <p>Already have an account? <span><Link to="/login">
                    Sign-in
                </Link></span></p>

            </div>
        </div>
    )
}

export default Register;
