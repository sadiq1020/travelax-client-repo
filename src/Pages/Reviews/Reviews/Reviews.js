import React, { useState, useEffect } from 'react';

const Reviews = ({ title }) => {
    // console.log(id);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?title=${title}`)

            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [title])


    return (
        <div>
            {reviews.length}
        </div>
    );
};

export default Reviews;