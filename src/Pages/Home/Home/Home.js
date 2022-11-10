import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SuccessStory from '../SuccessStory/SuccessStory';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Link to="/allservices" className='flex justify-center'><button className="btn btn-outline btn-primary">View All</button></Link>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;