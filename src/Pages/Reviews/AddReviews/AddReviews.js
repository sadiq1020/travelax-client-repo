import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddReviews = () => {
    const { user } = useContext(AuthContext);

    const handleReviews = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || "Not registered";
        const photoURL = form.photoURL.value;
        const review = form.review.value;

        // creating object data to send server to db
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

    }

    return (
        <form onSubmit={handleReviews} className='my-10 flex flex-col justify-center items-center text-white'>
            <p className='text-lg mb-2'>Name</p>
            <input name="name" type="text" placeholder="Your name" className="input input-bordered input-accent input-lg w-full max-w-2xl mb-5" required />
            <p className='text-lg mb-2'>Email</p>
            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} readOnly className="input input-bordered input-accent input-lg w-full max-w-2xl mb-5" />
            <p className='text-lg mb-2'>Photo URL</p>
            <input name="photoURL" type="text" placeholder="Your photo URL" defaultValue={user?.photoURL} readOnly className="input input-bordered input-success input-lg w-full max-w-2xl mb-5" required />
            <p className='text-lg mb-2'>Your Review</p>
            <textarea name="review" className="textarea textarea-success w-full max-w-2xl h-40 mb-5" placeholder="Write your review here"></textarea>
            <button className="btn btn-outline btn-primary">Submit</button>
        </form>
    );
};

export default AddReviews;