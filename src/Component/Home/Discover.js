import React from 'react';

const Discover = () => {
    return (
        <div className='w-9/12 bg-[#f2f2f2] mx-auto rounded-3xl lg:px-10 -mt-16'>
                    <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 justify-center items-center py-8'>
                        <div className=''>
                            <h1 className='text-3xl text-black font-semibold text-center lg:text-start mb-3'>Discover and sell <br/>
                            your own NFTs
                            </h1>
                            <p className='text-center lg:text-start'>
                            Join fandora and support outstanding global talent across multiple domains.
                            </p>
                            <div className='py-4 mt-3'>
                        <button className='btn btn1 py-2 uppercase text-md text-white rounded-full outline-none border-none'>
                            JOIN Fandora
                        </button>
                    </div>
                        </div>

                    <div className='grid grid-cols-2 gap-3'>
                        <img src='https://i.ibb.co/5kmhvzG/unnamed-1.png' alt='banner' className='-mb-20'></img>
                        <img src='https://i.ibb.co/ypYNvL2/unnamed-2.png' alt='banner' className='-mt-20'></img>
                    </div>



                    </div>
                </div>
    );
};

export default Discover;