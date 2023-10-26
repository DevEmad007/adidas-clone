import { useState,useRef,useEffect } from 'react';
import './navbar.css';
import WebsiteLogo from './WebsiteLogo';
import ExtraLinks from './ExtraLinks';
import ShopNav from './ShopNav';
import './responsiveStyles.css';
import { menudb } from './db';
import DropDownItem from './DropDownItem';
import { Close,Menu } from '@mui/icons-material';
import MobileDropDown from './MobileDropDown';


const Navbar = ({ isScrolled }) => {
    const [ open,setOpen ] = useState(false);

    return (
        <>
            <header
                className={`${isScrolled ? 'hideNavBar' : ''}`}
            >
                <div className={`headerNotice`}><p> FREE STANDERD SHIPPING & RETURNS </p> <span className='arrow' ></span></div>
                <div className="navContainer">
                    <ExtraLinks />
                    <WebsiteLogo />
                    <nav>
                        <div className='gridColumnOne'>
                            <Menu
                                sx={{ fontSize: '28px',cursor: 'pointer',zIndex: 20 }}
                                className='menuIcon'
                                onClick={() => setOpen(!open)} />
                        </div>
                        <ul className="navList">
                            {menudb.map((e,i) => (
                                <DropDownItem classNames={e?.classname} key={i} submenuitems={e}>
                                    {e?.title}
                                </DropDownItem>
                            ))}
                        </ul>
                        <ShopNav />
                    </nav>
                </div>
            </header>
            <div className="mobileNav" style={{ transform: open ? 'translateX(0%)' : 'translateX(-110%)' }} >
                <div className="navHeader">
                    <WebsiteLogo />
                    <Close
                        onClick={() => setOpen(!open)}
                        sx={{ position: 'absolute',top: '15px',right: '18px',fontSize: '32px',cursor: 'pointer',zIndex: 20 }} />
                </div>
                <MobileDropDown menudb={menudb}></MobileDropDown>
            </div>
            <div className={'contentPusher'}></div>
        </>
    );
};

export default Navbar;
