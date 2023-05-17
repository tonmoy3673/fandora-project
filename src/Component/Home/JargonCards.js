import React from 'react';


const JargonCards = ({ jargon }) => {
    const { title, des, img, button } = jargon;
  

    return (
        
        <>
            <div className='hidden lg:block'>
                <div className="card w-full lg:w-[286px] h-[396px] bg-slate-800 shadow-xl mt-10 lg:mb-10 rounded-4">
                    <figure className="px-10 -mt-10 z-50">
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

            {/* ============= Slider=========== */}
            
                {/* <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                   


                       

                        {
                            jargonCard.map(jargon => 
                                

                                <SwiperSlide> <JargonCards jargon={jargon} > </JargonCards> </SwiperSlide>)
                        }
                    

                </Swiper> */}

            

        </>
    );
};

export default JargonCards;