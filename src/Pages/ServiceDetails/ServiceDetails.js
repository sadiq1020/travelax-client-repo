import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Reviews from '../Reviews/Reviews/Reviews';

const ServiceDetails = () => {

    useTitle('Service Detail')

    const { user } = useContext(AuthContext);
    const { title, img, description, price, _id } = useLoaderData();

    return (
        <div className='text-white'>
            <div className="card lg:card-side bg-gray-800 shadow-xl my-10">
                <figure><img className='max-h-96' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-cyan-400">{title}</h2>
                    <h4 className='text-2xl text-red-700'>Service Charge (min): ${price}</h4>
                    <p className='max-w-lg text-justify'>{description}</p>
                </div>
            </div>
            <div>
                <h2 className='text-center text-4xl text-success'>Reviews</h2>

                <Reviews title={title}></Reviews>

                <div className='my-10 flex flex-col justify-center items-center text-success'>
                    {
                        user?.email ? <p>Tap the button to add your review</p> : <p>Please login to add your review</p>
                    }
                    <Link className='mt-5' to={`/addreviews/${_id}`}><button className="btn btn-outline btn-accent">Add reviews</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;