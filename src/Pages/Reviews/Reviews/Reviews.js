import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = ({ title }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-eleven-server-one.vercel.app/reviews?title=${title}`)

            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [title])


    return (
        <div>
            {
                reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;