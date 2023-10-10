import React from 'react';
import { Link } from 'react-router-dom';

const ClubJoinBanner = () => {
    return (
        <div className="clubAdd">
            <h2>JOIN OUR ADICLUB & GET 15% OFF</h2>
            <div className="joinBtn">
                <Link to={'/'}>Sign Up For Free <span>⟶</span></Link>
            </div>
        </div>
    );
};

export default ClubJoinBanner;
