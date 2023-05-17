import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const Avator = () => {



    return (
        <div className='py-10'>
            <div className='py3'>
                <h1 className='lg:text-7xl font-bold text1 text-5xl py-4'>
                    MORE FROM THIS CREATOR
                </h1>
                <p className='font-bold text1 text-3xl capitalize'>Metaverse  Avataars</p>
            </div>

            {/* =============== Slider =========== */}

            <div className='py-10 px-20'>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".button-next",
                        prevEl: ".button-prev",
                    }}
                    loop={true}
                    spaceBetween={15}
                    slidesPerView={2}
                    className="mySwiper"
                >
                   
                        <SwiperSlide className='py-10'>
                        <div className="card shadow-2xl w-full lg:w-60 h-full lg:h-80 lg:mb-10 rounded-4 bg-slate-800">
            <figure className="px-10">
                <img src='https://i.ibb.co/DkZd5F4/person.png' alt="card" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">CryptoPunk 3D #13</h2>
                <p className='text-md '>3D cryptopunk</p>
                
            </div>
        </div>

                        </SwiperSlide>
                        <SwiperSlide className='py-10' >
                        <div className="card shadow-2xl w-full lg:w-60 h-full lg:h-80 lg:mb-10 rounded-4 bg-slate-800">
            <figure className="px-10">
                <img src='https://i.ibb.co/DkZd5F4/person.png' alt="card" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">
                CryptoPunk 3D #13
                </h2>
                <p className='text-md'>
                3D cryptopunk
                </p>
                
            </div>
        </div>
                        </SwiperSlide>
                        <SwiperSlide className='py-10'>
                        <div className="card shadow-2xl w-full lg:w-60 h-full lg:h-80 lg:mb-10 rounded-4 bg-slate-800">
            <figure className="px-10">
                <img src='https://i.ibb.co/MpS8gMX/Rectangle-11.png' alt="card" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white">
                <h2 className="card-title text-2xl ">InvisibleFriend #54</h2>
                <p className='text-md'>
                INVISIBLE_FRIEND.CO
                </p>
                
            </div>
        </div>
                        </SwiperSlide>
                    
                    <button className='button-next right-1 text-5xl text-gray-600 hover:opacity-100 opacity-50'><IoIosArrowDroprightCircle /></button>
                    <button className='button-prev left-1 text-5xl text-gray-600 hover:opacity-100 opacity-50'><IoIosArrowDropleftCircle /></button>
                </Swiper>
            </div>


        </div>
    );
};

export default Avator;