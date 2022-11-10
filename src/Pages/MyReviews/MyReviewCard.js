import React from 'react';

const MyReviewCard = ({ review, handleDelete, handleEditReview }) => {
    const { name, photoURL, reviewMessage, serviceName, _id } = review;

    return (
        <div>
            <div className='flex justify-center'>
                <div className="bg-gray-800 p-3 w-4/5 lg:w-3/4 lg:p-8 rounded-lg my-5">
                    <h3 className='text-xl my-2 text-success'>Service Name: {serviceName}</h3>
                    <div className='flex'>
                        <h4 className="text-xl font-bold mr-5">Name: {name}</h4>
                        <img className='rounded-3xl h-9 w-9' src={photoURL} alt="" />
                    </div>
                    <p className="py-2"><span className='text-cyan-500 font-bold'>Review:</span> {reviewMessage}</p>
                    <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-error px-3 mt-5'>Delete</button>
                    <label htmlFor="my-modal-3" className="btn btn-outline btn-secondary ml-2">Edit Review</label>
                </div>
            </div>
            {/* modal */}
            <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <form onSubmit={(e) => handleEditReview(e, _id)} className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className='font-bold text-lg my-5'>Write Your Review</h3>

                        <textarea name="review" className="textarea textarea-success w-full max-w-2xl h-40 mb-5" placeholder="Write your review here" defaultValue={reviewMessage} required></textarea>

                        <button type="submit" className='btn btn-outline btn-success'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;