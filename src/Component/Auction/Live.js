import React from 'react';

const Live = () => {
    return (
        <div className='px-20'>
            
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div style={{ backgroundImage: `url("https://i.ibb.co/qd8315F/Card-Outline.png")`,backgroundPosition:'cover', backgroundRepeat:'no-repeat'}} className='w-full lg:w-[496px] h-full lg:h-[506px]'>
                        <div>
                        <img src='https://i.ibb.co/sPLSYzZ/Content-thumbnail.png' alt='' className='w-full lg:w-[450px] h-full lg:h-[420px]'>

                        </img>
                        </div>
                </div>
                    {/* ============ Content section ============== */}
                <div>
                    <h1 className='text-center text-3xl font-semibold text-white'>Lionel Messi: The GOAT</h1>

                    <div className='flex justify-center gap-5 py-4'>
                        <h2 className='text-center text-lg text-info'>ChromieMIX #7615</h2>

                        <div className='flex items-center gap-4 cursor-pointer mb-4'>
                <img src='https://i.ibb.co/4dpGVtn/dis.png' alt='icon'/><span className='text-[#f2f2f2]'>550</span>
                
                <img src='https://i.ibb.co/GpTnyYg/link.png' alt='icon'/>
                <span className='text-[#f2f2f2]'>550</span>
                <img src='https://i.ibb.co/dKVngmk/twitter.png' alt='icon'/>
                <span className='text-[#f2f2f2]'>550</span>
                <img src='https://i.ibb.co/tCH1Q09/you.png' alt='icon'/>
                <span className='text-[#f2f2f2]'>550</span>
               

            </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Live;