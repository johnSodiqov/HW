import React from 'react';
import './assets/main.css';
import logo from "./assets/photo1.jpeg"



const Main = () => {
    return (
        <div className='w-100 d-flex'>
            <img src={logo} alt="" className='w-50' />

            <div className="form w-50 p-4">
            <div className="header mb-4">
                <h1>Welcome Back</h1>
                <p>Login to continue</p>
            </div>

            <div className='input'>
            <div className='email'>
                <div className="logo">
                <i class="bi bi-person-fill fs-2"></i>
                </div>
                <input type='email' placeholder='Enter the email' size={30}/>

            </div>
            <div className='email'>
                <div className="logo">
                <i class="bi bi-lock-fill fs-2"></i>
                </div>
                <input type='password' placeholder='Enter the password' size={30}/>

            </div>
        </div>

        <div className="button ">
            <button className='mx-3'>Login</button>
            <button className='mx-3'>Forget password?</button>
        </div>
            </div>

        </div>
    );
}

export default Main;
