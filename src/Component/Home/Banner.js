import React from 'react';

import './Banner.css'
import Navbar from './Navbar';
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url("https://i.ibb.co/6PV8Gzk/Hero-Image-BG.png")`, backgroundPosition: "center", backgroundSize: 'cover' }}>
            <Navbar/>

            {/* =================== Banner Content ============== */}
            

        </div>
    );
};

export default Banner;