import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='lg:px-20 py-8'>
            <header aria-label="Site Header" className="dark:bg-gray-900 bg-transparent">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
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

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <button
                                    className="btn rounded-full lg:text-base border-none hover:text-white btn-outline btn-info capitalize px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Login
                                </button>

                                <div className="hidden sm:flex">

                                    <button
                                        type="button" className="px-6 lg:text-base capitalize btn border-none rounded-full btn-outline bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white hover:text-info dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Sign Up
                                    </button>


                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </div>
    );
};

export default Navbar;