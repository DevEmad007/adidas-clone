import { ArrowBackIosNew } from '@mui/icons-material';
import React,{ useState,useEffect,useRef } from 'react';
import DropDownItemSecondery from './DropDownItemSecondery';

const MobileDropDown = ({ menudb }) => {
    const [ activeLink,setActiveLink ] = useState('main');
    const [ activeMenu,setActiveMenu ] = useState('main');

    function DropdownItem(props) {
        const [ activeBefore,setActiveBefore ] = useState();
        console.log(activeBefore);
        return (
            <li >
                <button onClick={() => {
                    setActiveMenu('second');
                    props.goToMenu &&
                        setActiveBefore(props.goToMenu);
                    setActiveLink(props.goToMenu);
                }}>
                    {props.children}
                    {props.icon}
                </button>
                {props.submenuitems?.submenu &&
                    <div
                        className={` seconderyMenu  
                    ${activeLink === props.submenuitems?.title || activeMenu === 'links' ? 'showSeconderyMenu' : 'hideSeconderyMenu'}`}>
                        <ul>
                            <button onClick={() => {
                                setActiveMenu('main');
                                setActiveLink('main');
                            }}>
                                <span style={{ display: 'flex',alignItems: 'center',gap: '14px' }}>
                                    <ArrowBackIosNew />
                                    {props.submenuitems?.title}
                                </span>
                                {props.iconRight}
                            </button>
                            {
                                props.submenuitems?.submenu.map((el,i) => (
                                    <DropDownItemSecondery
                                        activeLinkBefore={props.submenuitems?.title}
                                        setActiveMenu={setActiveMenu}
                                        activeLink={activeLink}
                                        setActiveLink={setActiveLink}
                                        goToMenu={el.header}
                                        classNames={el?.classname}
                                        key={i}
                                        iconRight={<ArrowBackIosNew sx={{ transform: 'rotate(180deg)' }} />}
                                        submenu={el}
                                    >
                                        {el.header}
                                    </DropDownItemSecondery>
                                ))
                            }
                        </ul>
                    </div>
                }
            </li>
        );
    }

    return (
        <>
            <div
                className={`mobileMenu menuPrimary 
            ${activeMenu === 'main' ? 'showMainMenu1' : activeMenu === 'second' ? ' hideMainMenu1 ' : activeMenu === 'links' ? 'hideMainMenu2 ' : ''}`} >
                <ul >
                    {menudb.map((e,i) => (
                        <DropdownItem
                            goToMenu={`${e?.title}`}
                            classNames={e?.classname}
                            key={i}
                            submenuitems={e}
                            icon={<ArrowBackIosNew sx={{ transform: 'rotate(180deg)' }} />}
                        >
                            {e?.title}
                        </DropdownItem>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MobileDropDown;
