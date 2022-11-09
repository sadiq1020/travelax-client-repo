import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, photoURL, reviewMessage } = review;

    return (
        <div className='flex justify-center'>
            <div className="bg-gray-800 p-3 w-4/5 lg:w-3/4 lg:p-8 rounded-lg my-5">
                <div className='flex'>
                    <h4 className="text-xl font-bold mr-5">{name}</h4>
                    <img className='rounded-3xl h-9 w-9' src={photoURL} alt="" />
                </div>
                <p className="py-6">{reviewMessage}</p>
            </div>
        </div>
    );
};

export default ReviewCard;