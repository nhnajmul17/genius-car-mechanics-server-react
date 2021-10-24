import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { _id, name, price, img, description } = props.service;

    return (
        <div className='service py-3'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <h5>Price: ${price}</h5>
            <p className='px-3'>{description}</p>
            <Link to={`/booking/${_id}`}>
                <Button variant="danger">Book {name.toLowerCase()}</Button>
            </Link>
        </div>
    );
};

export default Service;