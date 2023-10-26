import { ArrowBackIosNew } from '@mui/icons-material';
import React,{ useState,useEffect,useRef } from 'react';
import DropDownItemSecondery from './DropDownItemSecondery';

const MobileDropDown = ({ menudb }) => {
    const [ activeLink,setActiveLink ] = useState('main');
    const [ activeMenu,setActiveMenu ] = useState('main');
    const [ activeBefore,setActiveBefore ] = useState();

    function DropdownItem(props) {
        return (
            <li >
                <button className={`${props.classNames !== undefined && props.classNames}`} onClick={() => {
                    setActiveMenu('second');
                    setActiveBefore(props.goToMenu);
                    props.goToMenu &&
                        setActiveLink(props.goToMenu);
                }}>
                    {props.children} {/*list  */}
                    {props.icon}
                </button>
                {props.submenuitems?.submenu &&
                    <div
                        className={` seconderyMenu  
                    ${activeLink === props.submenuitems?.title
                                || props.submenuitems?.title === activeBefore ? '' : 'hideSeconderyMenu'}`}>
                        <ul>
                            <button className={`seconderyBtn ${props.classNames !== undefined && props.classNames}`} onClick={() => {
                                setActiveMenu('main');
                                setActiveLink('main');
                            }}>
                                <span style={{ display: 'flex',alignItems: 'center',gap: '14px',textTransform: 'uppercase' }}>
                                    <ArrowBackIosNew />
                                    {props.submenuitems?.title}{/*back button */}
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
                className={`mobileMenu 
            ${activeMenu === 'main' ? 'showMainMenu1' : activeMenu === 'second' ? ' showMainMenu2 ' : activeMenu === 'links' ? 'showMainMenu3 ' : ''}`} >
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
