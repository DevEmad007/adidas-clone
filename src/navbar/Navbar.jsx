import { useState,useRef,useEffect } from 'react';
import './navbar.css';
import WebsiteLogo from './WebsiteLogo';
import ExtraLinks from './ExtraLinks';
import NavItem from './NavItem';
import Submenu from './Submenu';
import ShopNav from './ShopNav';
import './responsiveStyles.css';

const Navbar = () => {
    const [ isScrolled,setIsScrolled ] = useState(false);
    const prevScroll = useRef();
    prevScroll.current = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (prevScroll.current < window.scrollY) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[]);

    return (
        <>
            <header
                className={`${isScrolled ? 'hideNavBar' : ''}`}
            >
                <div className={`headerNotice`}> FREE STANDERD SHIPPING & RETURNS</div>
                <div className="navContainer">
                    <WebsiteLogo />
                    <ExtraLinks />
                    <nav>
                        <div className='gridColumnOne'></div>
                        <ul className="navList">
                            <NavItem classNames="bold" submenu={<Submenu />}>
                                MEN
                            </NavItem>
                            <NavItem classNames="bold" submenu={<Submenu />}>
                                WOMEN
                            </NavItem>
                            <NavItem classNames="bold" submenu={<Submenu />}>
                                KIDS
                            </NavItem>
                            <NavItem submenu={<Submenu />}>
                                GIFTS
                            </NavItem>
                            <NavItem submenu={<Submenu />}>
                                SALE
                            </NavItem>
                            <NavItem submenu={<Submenu />}>
                                3 STRIPE LIFE
                            </NavItem>
                        </ul>
                        <ShopNav />
                    </nav>
                </div>
            </header>
            <div className={'contentPusher'}></div>
        </>
    );
};

export default Navbar;
