import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { img, title, price, _id, description } = service;

    return (
        <div className="card card-compact w-96 bg-gray-800 shadow-xl">

            <PhotoProvider>
                <div className="foo">
                    <PhotoView src={img}>
                        <figure><img src={img} alt="" /></figure>
                    </PhotoView>
                </div>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-2xl text-orange-600 font-semibold'>Service Charge (min): ${price}</p>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;