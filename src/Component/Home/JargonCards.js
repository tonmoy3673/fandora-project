import React from 'react';
import Jargon from './Jargon';

const JargonCards = ({ jargon }) => {
    const {title,des,img,button}=jargon;

    return (
        <div >
            <div className="card w-full lg:w-96 h-[400px] bg-base-100 shadow-xl mt-10 mb-5 lg:mb-10 rounded-4">
                <figure className="px-10 -mt-20 z-50">
                    <img src={img} alt="card" className="rounded-xl sm:w-1/3 w-full lg:w-5/12" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <p className='text-md'>{des}</p>
                    <div className="card-actions mt-6 ">

                        <button className="btn text-sm border-1 rounded-full btn-outline-info outline-none btn2 capitalize bg-transparent">{button}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JargonCards;