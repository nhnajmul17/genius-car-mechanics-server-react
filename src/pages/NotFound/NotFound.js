import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/404/2488754-ai.png'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={img} alt="" />
            <Link to='/'><Button variant="danger">Go Back</Button></Link>
        </div>
    );
};

export default NotFound;