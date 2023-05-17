import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='lg:px-18 py-16'>
        <header aria-label="Site Header" className="dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-center lg:gap-28 gap-6">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600 dark:text-teal-600" href="/">

                            <img src='https://i.ibb.co/t2v54Xb/FANDORA-LOGO.png' alt='logo'>

                            </img>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Site Nav">
                            <ul className="flex items-center gap-6 text-base font-bold">
                                <li>
                                    <Link
                                        className="transition hover:text-gray-500/75 text-white dark:hover:text-white/75"
                                        to="/home"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <a
                                        className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Key Features
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Pre-NFT Rights
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Marketplace
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                   
                </div>
            </div>
        </header>


    </div>
    );
};

export default Landing;