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
                <h1 className='text-6xl font-bold text-white text-right'>
                    Affordable <br />
                    Price for car<br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 right-24 top-1/2">
                <p className='text-xl text-white text-right'>There are many variation of passages of available, but The Majority have suffered Alteration in Some Form </p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 right-24 top-3/4">
                <Link><button className='btn btn-outline btn-warning'>All Services</button></Link>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div >
    );
};

export default BannerItem;