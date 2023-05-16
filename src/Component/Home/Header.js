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

                {/* =========== three content ============== */}
                <div className='py-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-4'>
                    <input type="text" placeholder="Enter Email Here" className="input input-bordered border-2 border-info  w-full max-w-xs rounded-full bg-transparent" />
                    <div className='text-center'>
                    <button
                        type="button" className="btn text-white rounded-full outline-none px-6 lg:text-base capitalize border-none btn1 w-2/4"
                        href="/"
                    >
                        Sign Up
                    </button>
                    </div>

                    <h2 className='hidden lg:block text-3xl text-info'>
                        |
                    </h2>

                    {/* ============== Social Icons ========== */}
                    <div className='grid grid-cols-3 items-center justify-center text-center sm:justify-between'>
                    <button
                        type="button" className="btn text-white rounded-full outline-none border-none btn1 lg:w-2/4 "
                        href="/"
                    >
                       <img src='https://i.ibb.co/8NPLnF1/Google.png' alt='icon' className='z-50 lg:w-full sm:w-40'/>
                    </button>
                    <button
                        type="button" className="btn text-white rounded-full outline-none border-none btn1 lg:w-2/4"
                        href="/"
                    >
                       <img src='https://i.ibb.co/TRJgMJW/Rectangle-1.png' alt='icon' className='z-50 lg:w-full sm:w-40'/>
                    </button>
                    <button
                        type="button" className="btn text-white rounded-full outline-none border-none btn1 lg:w-2/4 "
                        href="/"
                    >
                       <img src='https://i.ibb.co/zs5w3d4/Vector.png' alt='icon' className='z-50 lg:w-full w-2/4'/>
                    </button>
                        
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Header;