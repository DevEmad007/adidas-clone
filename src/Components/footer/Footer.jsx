import React,{ useState,useEffect } from 'react';
import FooterColumn from './FooterColumn';
import { Link } from 'react-router-dom';
import './footer.css';
import FooterColumnMD from './FooterColumnMD';
import axios from "axios";

const Footer = () => {
    const dWidth = window.innerWidth;
    const year = new Date().getFullYear();
    const MDFDB = [
        {
            id: 1,
            col: [
                {
                    link: 'Help',
                    path: ''
                },
                {
                    link: 'Return & Exchange',
                    path: ''
                },
                {
                    link: 'Order Tracker',
                    path: ''
                },
                {
                    link: 'Shipping',
                    path: ''
                },
                {
                    link: 'Promotion',
                    path: ''
                },
                {
                    link: 'Country Selector',
                    path: ''
                }
            ]
        },
        {
            id: 2,
            col: [
                {
                    link: 'adiClub',
                    path: ''
                },
                {
                    link: 'Store Finder',
                    path: ''
                },
                {
                    link: 'Gift Cards',
                    path: ''
                },
                {
                    link: 'adidas App',
                    path: ''
                },
                {
                    link: 'Size Charts',
                    path: ''
                },
                {
                    link: 'Black Friday Deal',
                    path: ''
                }
            ]
        }

    ];

    const [ locationData,setLocationData ] = useState(null);
    useEffect(() => {
        getLocation();
    },[]);

    async function getLocation() {
        const res = await axios.get("http://ip-api.com/json");
        if (res.status === 200)
            setLocationData(res.data);
    }

    return (
        <footer className='footer'>
            <div className='PCFooter'>
                <FooterColumn />
                <FooterColumn />
                <FooterColumn />
                <FooterColumn />
            </div>
            <div className='MDFooterContainer'>
                {
                    MDFDB.map((e,i) => (
                        <FooterColumnMD db={e} key={i} />
                    ))
                }
            </div>
            <div>
                <div>
                    <Link>Privacy Policy</Link>
                    <Link>Terms and Conditions</Link>
                </div>
                <p>©{year} adidas {locationData?.country}, Inc.</p>
            </div>
        </footer>
    );
};

export default Footer;
