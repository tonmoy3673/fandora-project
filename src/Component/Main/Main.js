import React from 'react';


import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';

const Main = () => {
    return (
        <div>
            
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;