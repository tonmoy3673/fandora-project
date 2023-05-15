import React from 'react';
import Banner from './Banner';


const Header = () => {
    return (

        // ============ Header bg photo ============//
        <div style={{backgroundImage: `url("https://i.ibb.co/NxN1mD8/BG.png")`, backgroundPosition: "center", backgroundSize: 'cover' }}>
            
        {/* =========== Header Components ============= */}
            <Banner/>
                
        </div>
    );
};

export default Header;