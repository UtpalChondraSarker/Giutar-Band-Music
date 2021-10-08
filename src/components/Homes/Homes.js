import React from 'react';
import './Homes.css'


const Homes = (props) => {
    const { name, img, description, price } = props.friend;
    return (

        <div className='homes'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>${price}</h4>
            <p>{description.slice(0, 100)}</p>
            <button className='button'>Purches</button>
        </div>


    );
};

export default Homes;