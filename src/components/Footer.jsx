import React from 'react';
import "./assets/footer.css"

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="row w-100">
                    <div className="col-6"></div>
                    <div className="col-6 d-flex px-5">
                        <p className='col-3'>Login with</p>
                        <i className='bi bi-google col-2'></i>
                        <i className='bi bi-facebook col-2'></i>
                        <i className='bi bi-twitter col-2'></i>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
