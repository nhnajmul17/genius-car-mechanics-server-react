import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, price, img, description } = props.service;

    return (
        <div className='service py-3'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <h5>Price: ${price}</h5>
            <p className='px-3'>{description}</p>
        </div>
    );
};

export default Service;