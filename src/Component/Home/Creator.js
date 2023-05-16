import React from 'react';
import './Creator.css';
const Creator = () => {
    return (
        <div className='global lg:px-28 -mt-5'>
            <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 justify-center items-center'>
                <img src='https://i.ibb.co/88hHG5N/Phone-mockup-2.png' alt='img'>
                </img>

                <div className='lg:text-start text-center'>
                    <h2 className='text-xl font-semibold text-white'>NFT rights Marketplace</h2>
                    <h1 className='text-4xl font-bold text-white py-4'>Are you a Creator?</h1>
                    <p className='text-md text-white'>Now sell Pre NFT rights and monetises your existing content for Web3 applications</p>
                    <div className='py-4 mt-3'>
                        <button className='btn btn-info uppercase text-md text-white rounded-full'>
                            Check it out
                        </button>
                    </div>
                </div>

            </div>

            {/* ===================== Another Section ============= */}
            <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 justify-center items-center'>


                <div className='lg:text-start text-center'>
                    <h2 className='text-xl font-semibold text-white'>NFT rights Marketplace</h2>
                    <h1 className='text-4xl font-bold text-white py-4'>Are you a WEB3 Pro?</h1>
                    <p className='text-md text-white'>Access best content for building stronger Web3 assets and package them with our advanced NFT Utilities</p>
                    <div className='py-4 mt-3'>
                        <button className='btn btn-info uppercase text-md text-white rounded-full'>
                            Check it out
                        </button>
                    </div>
                </div>
                <img src='https://i.ibb.co/Kr1zjCs/Tablet-Mockup-1.png' alt='img'>
                </img>
            </div>

            <h2 className='text-center text-lg uppercase text-white font-semibold'>
                Homegrown Marketplace
            </h2>
            <h1 className='text-4xl text-center font-bold text-white py-4'>Explore an NFT Marketplace unlike any other</h1>
            <h2 className='text-center text-lg text-white '>
                Our homegrown NFT marketplace allows creators and pre NFT rights holders to create and sell officially licensed NFTs
            </h2>

            <div className='py-6 text-center mt-3'>
                <button className='btn hover:btn-info btn-black uppercase text-md text-white rounded-full'>
                    Coming Soon
                </button>
            </div>
            {/* ================ End fo Creator ================ */}
        </div>
    );
};

export default Creator;