import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const AddReviews = () => {

    useTitle('Add Review')

    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReviews = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || "Name not found";
        const email = user?.email || "Not registered";
        const photoURL = form.photoURL.value;
        const reviewMessage = form.review.value;

        // creating object data to send server to db
        const review = {
            serviceId: _id,
            serviceName: title,
            price,
            name,
            email,
            photoURL,
            reviewMessage
        }

        // --- sending reviews data to server
        fetch('https://assignment-eleven-server-one.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review Submitted Successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err));

    }

    return (
        <div className='my-10'>
            <form onSubmit={handleReviews} className='my-10 flex flex-col justify-center items-center text-white'>
                <p className='text-lg mb-2'>Name</p>
                <input name="name" type="text" placeholder="Your name" defaultValue={user?.displayName} readOnly className="input input-bordered input-accent input-lg w-full max-w-2xl mb-5" required />
                <p className='text-lg mb-2'>Email</p>
                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} readOnly className="input input-bordered input-accent input-lg w-full max-w-2xl mb-5" />
                <p className='text-lg mb-2'>Photo URL</p>
                <input name="photoURL" type="text" placeholder="Your photo URL" defaultValue={user?.photoURL} readOnly className="input input-bordered input-success input-lg w-full max-w-2xl mb-5" required />
                <p className='text-lg mb-2'>Your Review</p>
                <textarea name="review" className="textarea textarea-success w-full max-w-2xl h-40 mb-5" placeholder="Write your review here" required></textarea>
                <button className="btn btn-outline btn-primary">Submit</button>
            </form>
            <div className='flex justify-end'>
                <Link to="/allservices"><button className="btn btn-outline btn-success mr-10">Go back</button></Link>
            </div>
        </div>
    );
};

export default AddReviews;