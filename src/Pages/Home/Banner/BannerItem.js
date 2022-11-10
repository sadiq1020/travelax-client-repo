import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full" >
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-24 top-1/4">
                <h1 className='text-xl lg:text-6xl font-bold text-white text-right'>
                    Travel Hassle free<br />
                    All services<br />
                    in One Place
                </h1>
            </div>
            <div className="absolute flex justify-center flex-col lg:justify-end transform -translate-y-1/2 w-2/5 right-24 top-1/2">
                <p className='text-sm lg:text-xl text-white text-right'>Call here</p>
                <p className='text-sm lg:text-xl text-white text-right'>0166000000 (9am to 10pm)</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 right-24 top-3/4">
                <Link to="/allservices"><button className='btn btn-outline btn-warning'>All Services</button></Link>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div >
    );
};

export default BannerItem;