import React from 'react';
import BannerImg from '../assets/banner.avif';
import { Link } from 'react-router-dom/dist';

const Banner = () => {
    return (
        <section className="banner">
            <div className="dynamicImgContainer">
                <img className="bannerImg" src={BannerImg} alt="banner" />
            </div>
            <div className="bannerTextContainer">
                <div className="bannerText">
                    <h1> BEFORE THE BELL </h1>
                    <p>
                        Show up and show out with Back to School <br />
                        looks that have style in every step.
                    </p>
                </div>
                <div className="bannerLinkContainer">
                    <div className="linkOne">
                        <Link to={'/'}>Shop Men <span>⟶</span></Link>
                    </div>
                    <div className="linkTwo">
                        <Link to={'/'}>Shop Women <span>⟶</span></Link>
                    </div>
                    <div className="linkThree">
                        <Link to={'/'}>Shop KIDS <span>⟶</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
