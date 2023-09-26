import React from 'react';
import { Link } from 'react-router-dom/dist';

const Quotes = () => {
    return (
        <section className="noticeAfterBanner">
            <div>
                <h2>YEEZY</h2>
                <p>AVAILABLE ON CONFIRMED. DOWNLOAD, REGISTER, PARTICIPATE </p>
                <p>A PORTION OF THE SALE OF THESE ITEMS WILL BE DONATED IN SUPPORT OF THE FIGHT AGAINST DISCRIMINATION,
                    HATE, RACISM, AND ANTISEMITISM. </p>
                < Link>SHOP NOW</ Link>
                < Link>READ THE PRESS RELEASE</ Link>
            </div>
        </section>
    );
};

export default Quotes;
