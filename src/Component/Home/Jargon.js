import React from 'react';
import './Jargon.css';
import JargonCards from './JargonCards';
const Jargon = () => {
    
    const jargonCard = [
        {
            id: 1,
            title: 'Pre-NFT Rights',
            des: 'NFT rights enable your audience to build content around you and pay you as well as share royalties.',
            img:'https://i.ibb.co/gt0cKJ4/Medal.png',
            button:'Beta Launch Dec 13'
    },
        {
            id: 2,
            title: 'Talent Tokens',
            des: 'Talent Token are tied to creators growth. Creators can reward supporters that want to join on their journey.',
            img:'https://i.ibb.co/5GcD9ZL/Token.png',
            button:'Coming Soon'
    },
        {
            id: 3,
            title: 'Tokenised Crowdfunding',
            des: 'Tokenised crowdfunding allows creators to raise capital to improve the quality of their content.',
            img:'https://i.ibb.co/zQq1npj/Wallet.png',
            button:'Coming Soon'
            
    },
        {
            id: 4,
            title: 'Talent Content Platform',
            des: 'A platform that allows creators to create and have direct control of audience revenues.',
            img:'https://i.ibb.co/nBGX6F6/Like.png',
            button:'Coming Soon'
    },
        {
            id: 5,
            title: 'Pre-NFT Rights',
            des: 'Native NFT marketplace that allows creators and pre-NFTright holders to create and sell licensed NFTs.',
            img:'https://i.ibb.co/PzCF9PT/Shopping-bag.png',
            button:'Beta Launch Dec 13'
    },
    

    ]
  
    return (
        <div>
            <div className='text-center'>
                <h1 className='lg:text-7xl font-bold text1 text-5xl py-4'>Simplicity <span> {">>>"}</span> Jargon</h1>
                <p className='py-2 mb-2 text-lg text-white'>We take care of everything so the artists can focus on what they do best. Create art.</p>
            </div>

        {/* ===================  jargon cards ================ */}
        <div className='grid gap-6 lg:px-20 mx-auto mt-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center'>
        {
            jargonCard.map(jargon=><JargonCards jargon={jargon} key={jargon.id}>

            </JargonCards>)
           }
        </div>

        </div>
    );
};

export default Jargon;