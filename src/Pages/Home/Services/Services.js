import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-8'>
            <div className='text-center mb-4'>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-6'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div >
        </div >
    );
};

export default Services;