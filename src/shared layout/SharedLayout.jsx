import React from 'react';
import Navbar from '../navbar';
import { Outlet } from 'react-router-dom/dist';
import Footer from '../Components/footer/Footer';

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default SharedLayout;
