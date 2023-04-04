import React from 'react';
import Main from './main';
import Nav from './Nav';
import Footer from './Footer';

const Container = () => {
    return (
        <div className='container'>
            <Nav/>
            <Img/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default Container;
