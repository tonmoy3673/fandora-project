import React from 'react';

import './Banner.css'
import Navbar from './Navbar';
const Banner = () => {
    return (
        <div  style={{ backgroundImage: `url("https://i.ibb.co/6PV8Gzk/Hero-Image-BG.png")`, backgroundSize: 'cover',backgroundRepeat:"no-repeat" }}>
            <Navbar />

            {/* =================== Banner Content ============== */}
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-20">
                <div className='text-start'>
                    <h1 className="lg:text-7xl text-4xl lg:text-start text-center font-semibold uppercase text-white">Calling <br/> Creators of <br/>the Future</h1>
                    <p className="py-6 text-lg text-info">The World's First Pre-NFT Rights and Content Marketplace</p>
                    
                    <button className="btn text-info btn-outline border-1 border-info rounded-full  bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white"><img src='https://i.ibb.co/2tXYdYx/Ellipse-757.png' alt='ellipse'/> <span className='ms-2'>Now Live</span></button>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/XSNsPLg/Floating-pieces.png" className="w-full lg:w-6/12" alt='banner' />
                </div>

            </div>
        </div>


    );
};

export default Banner;