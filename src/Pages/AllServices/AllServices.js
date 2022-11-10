import React, { useState, useEffect } from 'react';
import useTitle from '../../hooks/useTitle';
import { Oval } from 'react-loader-spinner';
import ServiceCard from '../Home/Services/ServiceCard';

const AllServices = () => {

    useTitle('All Services')
    const [allServices, setAllServices] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setLoading(false)
                    setAllServices(data)
                }
            })
    }, [])

    if (loading) {
        return (<div className='flex justify-center'>
            <Oval
                height="80"
                width="80"
                radius="9"
                color="#00FFFF"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>)
    }

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