import React from 'react';
import "./Login.css";
import { loginUrl } from './spotify';



const Login  = () => {
    return (
        <div className="login">
         <img src="https://iili.io/dNk6zJ.md.jpg" alt="dNk6zJ.md.jpg" border="0"/>  

            <a href={loginUrl}>LOGIN INTO YOUR SPOTIFY</a>

        </div>

        );
}

export default Login;  

