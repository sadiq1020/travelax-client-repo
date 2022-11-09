import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const email = user.email;
    const [reviews, setReviews] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('travelax-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [email])


    // delete review
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully!')
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    // update review
    const handleEditReview = (event, id) => {
        event.preventDefault();
        const form = event.target;
        // const reviewMessage = form.review.value;
        // console.log(reviewMessage, id);

        const editedReview = {
            reviewMessage: form.review.value
        }

        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(editedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Edited Successfully')

                    // const remaining = reviews.filter(rev => rev._Id !== id);
                    // const edited = reviews.find(rev => rev._id === id);
                    // const newReviews = [...remaining, edited];
                    // setReviews(newReviews);
                    navigate("/")
                }



            })



    }

    return (
        <div>
            {
                reviews.length > 0 ?
                    reviews.map(review => <MyReviewCard key={review._id} review={review} handleDelete={handleDelete} handleEditReview={handleEditReview} ></MyReviewCard>)
                    :
                    <p className='h-screen flex justify-center items-center text-3xl text-red-700'>No reviews were added</p>
            }
        </div>
    );
};

export default MyReviews;