import React from 'react';

const NftCard = ({NFT}) => {
    const {title,img,des}=NFT;
    return (
        <div className='mx-auto'>
        <div className="card shadow-2xl w-full lg:w-60 h-full lg:h-80 lg:mb-10 rounded-4">
            <figure className="px-10">
                <img src={img} alt="card" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-black">{title}</h2>
                <p className='text-md text-black'>{des}</p>
                
            </div>
        </div>

    </div>
    );
};

export default NftCard;