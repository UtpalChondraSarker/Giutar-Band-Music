import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className='header fs-5   ' >
                <div className='title '>
                    <h2 className='fixed-top'>Wellcome to Guitar Band Website</h2>
                </div>
                <div className='d-flex d-flex justify-content-evenly title-container fixed-top mt-5 '>
                    <div className='row-4'>
                        <h2 className='m-4 '>Guitar <i className="fas fa-guitar"></i>Band</h2>
                    </div>
                    <div className='row-4 '>
                        <small><i class="fas fa-phone-square-alt text-warning "></i></small><br />
                        <small>o175-4860978</small><br />
                        <small>0933456</small>
                    </div>
                    <div className='row-4 '>
                        <small><i class="fas fa-map-marker-alt text-primary "></i></small><br />
                        <small>2130 Fultion Street San</small><br />
                        <small>Diego CA 7848-1000</small>
                    </div>
                </div>
                <nav className='fixed-top'>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/constacts">Constact</Link>
                </nav>

            </div>

        </div>
    );
};

export default Header;