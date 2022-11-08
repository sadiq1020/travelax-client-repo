import React, { useState, useEffect } from 'react';
import ServiceCard from '../Home/Services/ServiceCard';

const AllServices = () => {

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-6 gap-5'>
                {
                    allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;