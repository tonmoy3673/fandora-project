import React from 'react';

const Footer = () => {
    return (
        <div className='py-10'>
            <hr className='w-11/12 mx-auto '></hr>

            {/* ========= Footer Content ========= */}
            <div className='px-20 grid grid-cols-1 lg:grid-cols-5 lg:mt-10 mt-4 items-center text-[#f2f2f2]'>

            <div className='flex items-center gap-4 cursor-pointer mb-4'>
                <img src='https://i.ibb.co/4dpGVtn/dis.png' alt='icon'/>
                <img src='https://i.ibb.co/PhgnXLM/email.png' alt='icon'/>
                <img src='https://i.ibb.co/GpTnyYg/link.png' alt='icon'/>
                <img src='https://i.ibb.co/dKVngmk/twitter.png' alt='icon'/>
                <img src='https://i.ibb.co/tCH1Q09/you.png' alt='icon'/>
               

            </div>

                <h2 className='text-center '>reachus@fandora.app</h2>

                <h2 className='text-center '>Privacy Policy</h2>
                <h2 className='text-center '>Terms of use</h2>
                <h2 className='text-center '>© Fandora 2022 - All rights reserved</h2>

            </div>

            <div className='px-20 grid grid-cols-1 lg:grid-cols-2 lg:mt-10 mt-4 items-center justify-between text-center text-[#f2f2f2]'>
            <h2 className='text-center '>Designed by @indiecreatorsco</h2>
            <h2 className='text-center '>Fandora 1364019 B.C Ltd C/o Empowered Startups 744 W Hastings St #420, Vancouver, BC V6C 1A5, Canada</h2>

            </div>


        </div>
    );
};

export default Footer;