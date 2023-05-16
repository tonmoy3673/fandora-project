import React from 'react';
import Banner from './Banner';


const Header = () => {
    return (

        // ============ Header bg photo ============//
        <div style={{ backgroundImage: `url("https://i.ibb.co/NxN1mD8/BG.png")`, backgroundPosition: "center", backgroundSize: 'cover' }} className='w-full'>

            {/* =========== Header Components ============= */}
            <Banner />

            <div className='lg:px-20'>
                <h1 className='text-info font-semibold text-lg'>
                    Know about the launch before everyone else
                </h1>
                <div>
                  
                </div>

            </div>

        </div>
    );
};

export default Header;