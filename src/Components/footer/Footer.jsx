import React from 'react';
import FooterColumn from './FooterColumn';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div>
                <FooterColumn />
                <FooterColumn />
                <FooterColumn />
                <FooterColumn />
            </div>
            <div>
                <div>
                    <Link>Privacy Policy</Link>
                    <Link>Terms and Conditions</Link>
                </div>
                <p>©{year} adidas America, Inc.</p>
            </div>
        </footer>
    );
};

export default Footer;
