import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (

        // ============ Header bg photo ============//
        <div style={{backgroundImage: `url("https://i.ibb.co/NxN1mD8/BG.png")`, backgroundPosition: "center", backgroundSize: 'cover' }}>
            
        {/* =========== Header Components ============= */}
            <Navbar/>
                
        </div>
    );
};

export default Header;