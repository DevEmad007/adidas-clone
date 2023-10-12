import { ArrowBackIosNew } from '@mui/icons-material';
import React,{ useState,useRef,useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const MDNavItem = ({ children,submenuitems }) => {
    const [ activeMenu,setActiveMenu ] = useState('main');
    const [ menuHeight,setMenuHeight ] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    },[]);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    return (
        <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}>
            <li className={`MobileDeviceNavItem`}>
                <button goToMenu="main" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                    {children}
                    <ArrowBackIosNew sx={{ transform: 'rotate(180deg)' }} />
                </button>
                {/* open && <MobileDropDown submenuitems={submenuitems} /> */}
            </li>
        </CSSTransition>
    );
};

export default MDNavItem;
