import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {

    useTitle('Add services')

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;

        // creating object data to send server to db
        const service = {
            img,
            price,
            title,
            description
        }

        // --- sending service data to server
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // alert('Service Submitted Successfully')
                    toast("Service Added Successfully");
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <form onSubmit={handleAddService} className='my-10 flex flex-col justify-center items-center text-white'>
                <p className='text-lg mb-2'>Price</p>
                <input name="price" type="number" placeholder="Service price" className="input input-bordered input-accent input-lg w-full max-w-2xl mb-5" required />
                <p className='text-lg mb-2'>Service Title</p>
                <input name="title" type="text" placeholder="Service title" className="input input-bordered input-accent input-lg w-full max-w-2xl mb-5" />
                <p className='text-lg mb-2'>Service Photo URL</p>
                <input name="img" type="text" placeholder="Service photo URL" className="input input-bordered input-success input-lg w-full max-w-2xl mb-5" required />
                <p className='text-lg mb-2'>Service Description</p>
                <textarea name="description" className="textarea textarea-success w-full max-w-2xl h-40 mb-5" placeholder="Write your review here" required></textarea>
                <button className="btn btn-outline btn-primary">Submit</button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default AddServices;