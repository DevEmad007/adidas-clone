import React,{ useState } from 'react';
import { Link } from 'react-router-dom/dist';
import { tranding,newArrivlas } from './db';
import './trending.css';
import { FavoriteBorderOutlined } from '@mui/icons-material';

const Trending = () => {
    const [ linkOne,setLinkOne ] = useState(true);

    return (
        <>
            <section className="tranding">
                <h2
                    onClick={() => setLinkOne(true)}
                    className={`newArrivals ${linkOne ? 'styleChangeOne' : ''}`}
                >
                    New Arrivals
                </h2>
                <h2
                    onClick={() => setLinkOne(false)}
                    className={`${linkOne ? '' : 'styleChangeOne'}`}
                >
                    What's Trending
                </h2>
                <div className="cartContainer">
                    {linkOne ?
                        (newArrivlas.map(item => (
                            <Link key={item.id}>
                                <div className='card' >
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
                        )))
                        :
                        (tranding.map(item => (
                            <Link key={item.id}>
                                <div className='card' >
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
                        )))
                    }

                </div>
            </section>
        </>
    );
};

export default Trending;
