import React from 'react';
import './Update.css';

const Update = () => {
    return (
        <div className='py-10 px-20'>

            <footer aria-label="Site Footer" className="update rounded-3xl">
                <div className="mx-auto px-4 pb-8 pt-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-md">
                        <strong
                            className="block text-center text-xl font-bold text-white sm:text-3xl"
                        >
                           Get More Updates
                        </strong>
                        <p className='py-3'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks </p>

                        <form className="mt-6">
                            <div className="relative max-w-lg">
                                <label className="sr-only" htmlFor="email"> Email </label>

                                <input
                                    className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                    id="email"
                                    type="email"
                                    placeholder="Enter Email Here"
                                />

                                <button
                                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                                >
                                    Join Fandora
                                </button>
                            </div>
                        </form>
                    </div>




                </div>
            </footer>
        </div>
    );
};

export default Update;