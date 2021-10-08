import React from 'react';
import './Constacts.css'


const Constacts = () => {

    return (

        <div className='container from mt-5'>
            <h1 className=' text-warning constact-container' >Contacts us</h1>

            <div className="row g-3 mt-2 ">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>

            </div>
            <br />
            <div className="row g-3 ">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Email:" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Phone:" aria-label="Last name" /><br />
                </div>

            </div>
            <div classNameName='area'>
                <textarea name="" cols="40" rows="5" placeholder='Your Message:'></textarea>
            </div>

        </div>

    );
};

export default Constacts;
