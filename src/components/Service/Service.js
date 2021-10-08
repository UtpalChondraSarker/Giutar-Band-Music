import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, img, price, description } = props.service;

    return (

        <div className='service mt-5 '>

            <img className=' img' src={img} alt="" />
            <h3>{name}</h3>
            <h5>${price}</h5>
            <p>{description.slice(0, 100)}</p>
            <button className='button'>Purches</button>
        </div>
    );
};

export default Service;