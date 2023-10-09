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
            </section>
        </>
    );
};

export default Trending;
