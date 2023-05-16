import React from 'react';


const JargonCards = ({ jargon }) => {
    const {title,des,img,button}=jargon;

    return (
        <div className='mx-auto'>
            <div className="card w-full lg:w-80 h-[400px] bg-slate-800 shadow-xl mt-10 lg:mb-10 rounded-4">
                <figure className="px-10 -mt-20 z-50">
                    <img src={img} alt="card" className="rounded-xl sm:w-1/3 w-full lg:w-5/12" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl text-white">{title}</h2>
                    <p className='text-md text-white'>{des}</p>
                    <div className="card-actions mt-6 ">

                        <button className="btn text-sm border-1 rounded-full btn-outline-info outline-none btn2 capitalize bg-transparent">{button}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JargonCards;