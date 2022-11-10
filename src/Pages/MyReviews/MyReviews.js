import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import MyReviewCard from './MyReviewCard';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);

    useTitle('My reviews')

    const email = user.email;
    const [reviews, setReviews] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://assignment-eleven-server-one.vercel.app/reviews?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('travelax-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [email, logOut])


    // delete review
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            fetch(`https://assignment-eleven-server-one.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return logOut();
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Deleted successfully!");
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

        const editedReview = {
            reviewMessage: form.review.value
        }

        fetch(`https://assignment-eleven-server-one.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(editedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Edited Successfully')
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
            <ToastContainer />
        </div>
    );
};

export default MyReviews;