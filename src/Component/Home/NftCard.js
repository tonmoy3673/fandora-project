import React from 'react';

const NftCard = ({NFT}) => {
    const {title,img,des}=NFT;
    return (
        <div className='mx-auto mb-10 text-black'>
        <div className="card shadow-2xl w-full lg:w-60 h-full lg:h-80 lg:mb-10 rounded-4">
            <figure className="px-10">
                <img src={img} alt="card" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-secondary">{title}</h2>
                <p className='text-md text-secondary'>{des}</p>
                
            </div>
        </div>

    </div>
    );
};

export default NftCard;