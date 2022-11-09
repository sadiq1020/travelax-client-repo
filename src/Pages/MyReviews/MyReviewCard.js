import React from 'react';

const MyReviewCard = ({ review, handleDelete }) => {
    const { name, photoURL, reviewMessage, serviceName, _id } = review;
    return (
        <div className='flex justify-center'>
            <div className="bg-gray-800 p-3 w-4/5 lg:w-3/4 lg:p-8 rounded-lg my-5">
                <h3 className='text-xl my-2 text-success'>Service Name: {serviceName}</h3>
                <div className='flex'>
                    <h4 className="text-xl font-bold mr-5">Name: {name}</h4>
                    <img className='rounded-3xl h-9 w-9' src={photoURL} alt="" />
                </div>
                <p className="py-2"><span className='text-cyan-500 font-bold'>Review:</span> {reviewMessage}</p>
                <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-error px-3 mt-5'>Delete</button>
            </div>
        </div>
    );
};

export default MyReviewCard;