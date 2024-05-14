// DefaultLayout.js
import React from 'react';
import Navbar from '../components/Navbar';
import Herocaroussal from '../components/HeroCarousal/Herocarousal.component';
const DefaultLayout = (props) => {
    return (
        <div>
            <Navbar />
            <Herocaroussal/>
            {props.children}
        </div>
    );
};

export default DefaultLayout;
