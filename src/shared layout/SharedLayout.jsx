import React,{ useEffect,useRef,useState } from 'react';
import Navbar from '../navbar';
import { Outlet } from 'react-router-dom/dist';
import Footer from '../Components/footer/Footer';

const SharedLayout = () => {
    const [ isScrolled,setIsScrolled ] = useState(false);
    const prevScroll = useRef();

    const handleScroll = () => {
        if (prevScroll.current < window.scrollY) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }
        prevScroll.current = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[ prevScroll.current ]);

    return (
        <>
            <Navbar isScrolled={isScrolled} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default SharedLayout;
