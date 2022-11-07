import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, title, price, _id, description } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-2xl text-orange-600 font-semibold'>Price: $ {price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/detail/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;