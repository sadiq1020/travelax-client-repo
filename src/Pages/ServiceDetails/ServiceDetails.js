import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, img, description, price, _id } = useLoaderData();

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-10">
                <figure><img className='max-h-96' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <h4 className='text-2xl text-red-700'>Service Charge (min): ${price}</h4>
                    <p className='max-w-lg'>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center'>Reviews</h2>
                <Link to={`/addreviews/${_id}`}><button className="btn btn-outline btn-accent">Add reviews</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;