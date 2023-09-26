import React from 'react';
import { Link } from 'react-router-dom/dist';
import { tranding } from './db';
import './trending.css';
import { FavoriteBorderOutlined } from '@mui/icons-material';

const Trending = () => {
    const one = tranding[ 0 ];

    return (
        <>
            <section className="tranding">
                <h2>What's Trending</h2>
                <div className="cartContainer">
                    {tranding.map(item => (
                        <Link >
                            <div className='card' key={item.id}>
                                <div className='cardImgContainer'>
                                    <FavoriteBorderOutlined className='favIcon' />
                                    <img src={item.img} alt="" />
                                    <span className='priceTag'>${item.price}</span>
                                </div>
                                <div className="cardInfo">
                                    <p> {item.title}</p>
                                    <p>Orginals</p>
                                    <p>Best Seller</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="trandingLinks">
                    <h2>Popular right now</h2>
                    <div className='linksGrid'>
                        <h2>samba</h2>
                        <h2>campus</h2>
                        <h2>gazelle</h2>
                        <h2>messi</h2>
                        <h2>ultraboost</h2>
                        <h2>nmd</h2>
                    </div>
                </div>
            </section>
            <article className='homeArticle'>
                <section>
                    <h3>MEN’S CLOTHING & SHOES</h3>
                    <p>
                        As a creator, you look for ways to excel and express yourself when and where you can, from reaching for that last rep to evolving your streetwear style. Log miles or tear down the baseline in men's shoes with responsive cushioning. Rep an athletic style off the field in lifestyle apparel born of sport heritage. From athletes to streetwear enthusiasts, adidas men’s clothing and shoes exist to let you go harder, dig deeper, and get the most out of yourself, from the pitch to the street to the road less traveled.
                    </p>
                </section>
            </article>
            <div className="clubAdd">
                <h2>JOIN OUR ADICLUB & GET 15% OFF</h2>

            </div>
        </>
    );
};

export default Trending;
