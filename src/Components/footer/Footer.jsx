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
    const [ ipAddress,setIpAddress ] = useState();
    const [ country,setCountry ] = useState();

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setIpAddress(data.ip));
    },[]);

    useEffect(() => {
        fetch("https://api.ipfind.com/?ip=" + ipAddress)
            .then(res => res.json())
            .then(data => setCountry(data.country));
    },[ ipAddress ]);

    // var xmlhttp = new XMLHttpRequest();
    // var ip_address = ipAddress;
    // var url = "https://api.ipfind.com/?ip=" + ip_address;

    // xmlhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         var result = JSON.parse(this.responseText);
    //         setCountry(result.country);
    //     }
    // };

    // xmlhttp.open("GET",url,true);
    // xmlhttp.send();

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
                <p>©{year} adidas {country}, Inc.</p>
            </div>
        </footer>
    );
};

export default Footer;
