import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import Live from './Live';

const Auction = () => {
    return (
        <div className='w-full bg-[#1E1E1E]'>
           <Navbar/>
           <Live/>
           <Footer/>
        </div>
    );
};

export default Auction;