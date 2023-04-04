import React from 'react';
import "./assets/nav.css"

const Nav = () => {
    return (
        <div>
            <nav>
            <div className="logo">
                <h1><span style={{color: 'blueviolet'}}>C</span>reative</h1>

            </div>
            <div className="links">
                <h4 className='mx-2 fs-3'>New user?</h4>
                <a href="https://www.youtube.com/" target='_blank' rel='noreferrer' className='fs-4'>Sign Up</a>
            </div>
            </nav>
        </div>
    );
}

export default Nav;
