import React from 'react';
import NftCard from './NftCard';

const Nft = () => {

    const nftCard = [
        {
            id: 1,
            title: 'Future Talent NFT',
            des: 'Pre-buy rights to your social media content.',
            img: 'https://i.ibb.co/gZ7jCLb/image-342.png'
            
        },
        {
            id: 2,
            title: 'Product Placement NFT',
            des: 'Pre-buy rights to your product mentions.',
            img: 'https://i.ibb.co/qNcwY4T/device-electronicv2-5-1.png'
            
        },
        {
            id: 3,
            title: 'Online Interaction NFT',
            des: 'Pre-buy rights to specific time periods for exclusive interactions.',
            img: 'https://i.ibb.co/YkwjkyD/4912156-1.png'

        },
        {
            id: 4,
            title: 'Digital Art NFT',
            des: 'Pre-buy rights to create digital art featuring you.',
            img: 'https://i.ibb.co/MgzxKV9/Image-3.png'
            
        },
        {
            id: 5,
            title: 'Gaming NFT',
            des: 'Pre-buy rights to incorporate your digital avatar in a game or product.',
            img: 'https://i.ibb.co/MnzJm8X/4850889-1.png'
            
        },


    ]



    return (
        <div className='pt-10'>
            <div className="rounded-3xl" style={{ backgroundImage: `url("https://i.ibb.co/F6qVFxP/Bg.png")`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-20">

                </div>
                <div>
                    <div className="text-center py-10 lg:px-20">
                        <h1 className="lg:text-7xl text-5xl font-bold pt-3">
                            Welcome to the Future
                        </h1>
                        <h1 className='lg:text-7xl font-bold text1 text-5xl py-4 mb-3'>
                            Pre NFT Rights
                        </h1>

                        <p className="mb-5">
                            Imagine a real life auction, but everything is an NFT.
                            Fandora is the first platform that enables creators to auction or sell their NFT rights to their audience. These pre NFT rights enable your audience to build content around you, pay you, and also share royalties. With Fandora, creators can do all this easily - without all the tech-speak.
                        </p>
                        <h5 className="text-[#438ABC] text-lg text-center py-10">These are the different types of NFT rights you can sell</h5>
                    </div>
                </div>

                {/* ===================== NFT Card Section ============ */}
                <div className='grid gap-6 lg:px-20 mt-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto'>
                        {
                            nftCard.map(NFT=><NftCard NFT={NFT} key={NFT.id}>

                            </NftCard>)
                        }
                </div>

            </div>
        </div>
    );
};

export default Nft;