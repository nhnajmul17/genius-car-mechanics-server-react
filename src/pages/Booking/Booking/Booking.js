import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {

    const [service, setService] = useState({})
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>Details of :{service.name}</h2>
            <img src={service.img} alt="" />
            <p>price:{service.price}</p>
            <h2>This is booking:{serviceId}</h2>

        </div>
    );
};

export default Booking;