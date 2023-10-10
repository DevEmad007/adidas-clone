import { useState,useRef,useEffect } from 'react';
import './navbar.css';
import WebsiteLogo from './WebsiteLogo';
import ExtraLinks from './ExtraLinks';
import ShopNav from './ShopNav';
import './responsiveStyles.css';
import { menudb } from './db';
import DropDownItem from './DropDownItem';
import { Menu,WidthNormal } from '@mui/icons-material';


const Navbar = () => {
    const [ isScrolled,setIsScrolled ] = useState(false);
    const prevScroll = useRef();
    prevScroll.current = window.scrollY;
    const [ width,setWidth ] = useState(window.innerWidth);

    useEffect(() => {
        setWidth(window.innerWidth);
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
                <div className={`headerNotice`}><p> FREE STANDERD SHIPPING & RETURNS </p> <span className='arrow' ></span></div>
                <div className="navContainer">
                    <ExtraLinks />
                    <WebsiteLogo />
                    <nav>
                        <div className='gridColumnOne'>
                            <Menu sx={{ fontSize: '28px',cursor: 'pointer',display: width < 950 ? 'block' : 'none' }} className='menuIcon' />
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
            <div className={'contentPusher'}></div>
        </>
    );
};

export default Navbar;
