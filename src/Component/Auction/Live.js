import React from 'react';

const Live = () => {
    return (
        <div className='px-20'>

            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div>
                <div className='flex items-center justify-center py-3 mb-3'>
                    <img src='https://i.ibb.co/0ydtbw1/Vector-1.png' alt='icon'>
                    </img><span className='ms-2 text-[#f2f2f2]'>266</span>

                    <img src='https://i.ibb.co/rZ4ZVrJ/Vector-2.png' alt='icon' className='ms-3'>
                    </img><span className='ms-2 text-[#f2f2f2]'>2.7K</span>
                        
                    </div>

                    <div className='border-info border-2 rounded-2xl w-full lg:w-[550px] h-full lg:h-[309px] mb-10'>


                    <div className='mx-auto'>
                    <img src='https://i.ibb.co/3BwVn4g/giphy-1.png' alt='messi' className='mx-auto pt-4'>
                        
                        </img>
                        <img src='https://i.ibb.co/rZ4ZVrJ/Vector-2.png' alt='icon' className='mx-auto mt-3'>
                    </img>
                        
                    </div>

                    
                   
                    
                </div>
                <div className='text-center'>
                <button className="btn text-info btn-outline border-1 border-info w-2/4 lg:w-3/4 rounded-xl hover:text-white btn2 mb-4">
                Description
                            </button>
                <button className="btn text-info btn-outline border-1 border-info w-2/4 lg:w-3/4 rounded-xl hover:text-white btn2 mb-4">
                Rights Available
                            </button>
                <button className="btn text-info btn-outline border-1 border-info w-2/4 lg:w-3/4 rounded-xl hover:text-white btn2 mb-4">
                Utilities Offered
                            </button>
                    </div>

                    <div className='mt-10 flex items-center justify-center'>
                    <button className="btn text-info btn-outline border-1 border-info w-2/4 btn-md text-xs rounded-md hover:text-white btn2 ">
                    Have a Question?
                            </button>
                            <button className="btn me-3 btn-info border-1 border-info btn-md text-xs rounded-xl text-white btn2">
                            POST A QUERY
                            </button>
                    </div>
                </div>

                
                {/* ============ Content section ============== */}
                <div>
                    <div className='flex items-center justify-between py-6 mb-3'>
                        <h2 className='text-[#f2f2f2]'>Owned by <span className='text-info'>PSG</span></h2>
                        <button className="btn text-info btn-outline border-1 border-info rounded-2xl hover:text-white btn2">
                               Make as Favourite
                            </button>
                    </div>
                    <h1 className='text-center text-3xl font-semibold text-white'>Lionel Messi: The GOAT</h1>

                    <div className='flex justify-center gap-5 py-4'>
                        <h2 className='text-center text-md text-info'>ChromieMIX #7615</h2>

                        <div className='flex items-center gap-4 cursor-pointer mb-4'>
                            <img src='https://i.ibb.co/4dpGVtn/dis.png' className='ms-3' alt='icon' /><span className='text-[#f2f2f2]'>550</span>

                            <img src='https://i.ibb.co/GpTnyYg/link.png' alt='icon' className='ms-3' />
                            <span className='text-[#f2f2f2]'>550</span>
                            <img src='https://i.ibb.co/dKVngmk/twitter.png' alt='icon' className='ms-3' />
                            <span className='text-[#f2f2f2]'>550</span>
                            <img src='https://i.ibb.co/tCH1Q09/you.png' alt='icon' className='ms-3' />
                            <span className='text-[#f2f2f2]'>550</span>


                        </div>
                    </div>

                    <div className='border-info border-2 rounded-2xl w-full lg:w-[550px] h-full lg:h-[309px] mb-10'>
                        <h2 className='p-2 text-start text-xs text-[#f2f2f2]'>Auction Price</h2>
                        <div className='flex mt-6 items-center justify-center gap-6'>
                            <img src='https://i.ibb.co/wMzMZdj/Vector-1.png' alt='icon'>
                            </img>
                            <h1 className='text-[#f2f2f2]'>
                                Sale ends 25 December 2022 at 1:57 am GMT+5:30
                            </h1>
                        </div>

                        <h2 className='py-5 text-[#f2f2f2] text-sm text-center'>Current Price</h2>
                        <div className='flex items-center gap-4 justify-center'>
                            <h1 className='text-center font-semibold text-3xl text-[#f2f2f2]'>15.89 ETH</h1>
                            <p className='text-xs text-[#D9D9D9]'>$111,111.11</p>
                        </div>

                        <div className='items-center justify-center gap-8 py-6 mt-5 flex '>
                            <button
                                type="button" className="btn text-white rounded-full outline-none px-6 lg:text-base capitalize border-none btn1 "

                            >
                                Buy Now
                            </button>

                            <button className="btn text-info btn-outline border-1 border-info rounded-2xl hover:text-white btn2">
                                MAKE AN OFFER
                            </button>
                        </div>

                    </div>

                    {/* ===================  Table ============= */}

                    

                    <div className='border-info border-2 rounded-2xl w-full lg:w-[550px] h-full lg:h-[309px] py-8'>
                    <h2 className='text-[#f2f2f2] text-semibold ms-3 mb-2 text-2xl'> Listings</h2>

                        <div
                            className="overflow-x-auto rounded-lg dark:border-gray-700"
                        >
                            <table
                                className="min-w-full divide-y-2 divide-gray-200  text-sm dark:bg-gray-900"
                            >
                                <thead className="ltr:text-left rtl:text-right">
                                    <tr>
                                        <th
                                            className="whitespace-nowrap px-4 py-2 font-medium text-white"
                                        >
                                            User Details
                                        </th>
                                        <th
                                            className="whitespace-nowrap px-4 py-2 font-medium text-white"
                                        >
                                            Volume
                                        </th>
                                        <th
                                            className="whitespace-nowrap px-4 py-2 font-medium text-white"
                                        >
                                            Floor Price
                                        </th>
                                        <th
                                            className="whitespace-nowrap px-4 py-2 font-medium text-white"
                                        >
                                            Items
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="">
                                    <tr>
                                    
                                        <td
                                            className="whitespace-nowrap px-4 py-2 font-medium text-white"
                                        >
                                            Bored Ape Yacht Club
                                        </td>
                                        <td
                                            className="whitespace-nowrap px-4 py-2 text-white"
                                        >
                                            230.38 ETH <br/>
                                            <span className='text-xs text-[#00FF57]'>+50.20%</span>
                                        </td>
                                        <td
                                            className="whitespace-nowrap px-4 py-2 text-gray-200"
                                        >
                                            12.38 ETH
                                            <br/>
                                            <span className='text-xs text-[#00FF57]'>+50.20%</span>
                                        </td>
                                        <td
                                            className="whitespace-nowrap px-4 py-2 text-gray-200"
                                        >
                                            138
                                        </td>
                                    </tr>
                                    <tr>
                                    
                                    <td
                                        className="whitespace-nowrap px-4 py-2 font-medium text-white"
                                    >
                                        Bored Ape Yacht Club
                                    </td>
                                    <td
                                        className="whitespace-nowrap px-4 py-2 text-white"
                                    >
                                        230.38 ETH <br/>
                                        <span className='text-xs text-[#00FF57]'>+50.20%</span>
                                    </td>
                                    <td
                                        className="whitespace-nowrap px-4 py-2 text-gray-200"
                                    >
                                        12.38 ETH
                                        <br/>
                                        <span className='text-xs text-[#00FF57]'>+50.20%</span>
                                    </td>
                                    <td
                                        className="whitespace-nowrap px-4 py-2 text-gray-200"
                                    >
                                        138
                                    </td>
                                </tr>
                                <tr>
                                    
                                    <td
                                        className="whitespace-nowrap px-4 py-2 font-medium text-white"
                                    >
                                        Bored Ape Yacht Club
                                    </td>
                                    <td
                                        className="whitespace-nowrap px-4 py-2 text-white"
                                    >
                                        230.38 ETH <br/>
                                        <span className='text-xs text-[#00FF57]'>+50.20%</span>
                                    </td>
                                    <td
                                        className="whitespace-nowrap px-4 py-2 text-gray-200"
                                    >
                                        12.38 ETH
                                        <br/>
                                        <span className='text-xs text-[#00FF57]'>+50.20%</span>
                                    </td>
                                    <td
                                        className="whitespace-nowrap px-4 py-2 text-gray-200"
                                    >
                                        138
                                    </td>
                                </tr>
                                   

                                   
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ============ End of Div ============= */}
                </div>

            </div>
        </div>
    );
};

export default Live;