import { useState,useRef,useEffect } from 'react';
import './navbar.css';
import WebsiteLogo from './WebsiteLogo';
import ExtraLinks from './ExtraLinks';
import ShopNav from './ShopNav';
import './responsiveStyles.css';
import { menudb } from './db';
import DropDownItem from './DropDownItem';
import { Close,Menu } from '@mui/icons-material';
import MDNavItem from './MDNavItem';
import MobileDropDown from './MobileDropDown';


const Navbar = () => {
    const [ isScrolled,setIsScrolled ] = useState(false);
    const prevScroll = useRef();
    prevScroll.current = window.scrollY;
    const [ width,setWidth ] = useState(window.innerWidth);
    const [ open,setOpen ] = useState(true);

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleScroll = () => {
            if (prevScroll.current < window.scrollY && width > 950) {
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
    console.log(open);
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
                <div className="mobileNav" style={{ transform: open ? 'translateX(0%)' : 'translateX(-110%)' }} >
                    <div className="navHeader">
                        <WebsiteLogo />
                        <Close
                            onClick={() => setOpen(!open)}
                            sx={{ position: 'absolute',top: '15px',right: '40px',fontSize: '32px',cursor: 'pointer',display: width < 950 ? 'block' : 'none',zIndex: 20 }} />
                    </div>
                    <MobileDropDown menudb={menudb}></MobileDropDown>
                </div>
            </header>
            <div className={'contentPusher'}></div>
        </>
    );
};

export default Navbar;
