import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url= location.state?.form ||'/shop';

    console.log('came from',location.state?.form);

    const handleGoogleLogin = () => {
       signInUsingGoogle().then(result => {
            history.push(redirect_url)
       })
    }

    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name='' id='' placeholder='Your Email'/>
                    <br/>
                    <input type="password" name="" id="" placeholder='Your Password' />
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <p>new to ema-john ? <Link to="/register">Create Account</Link></p>
                <div>----------or-----------</div>
                <button 
                className="btn-regular"
                onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;