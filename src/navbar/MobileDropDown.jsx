import { ArrowBackIosNew } from '@mui/icons-material';
import React,{ useState,useEffect,useRef } from 'react';
import { CSSTransition,SwitchTransition } from 'react-transition-group';

const MobileDropDown = ({ menudb }) => {
    const [ activeMenu,setActiveMenu ] = useState('main');
    const nodeRef = useRef();

    function DropdownItem(props) {
        return (
            <li className={`menu-item`}>
                <button onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                    {props.children}
                    <ArrowBackIosNew sx={{ transform: 'rotate(180deg)' }} />
                </button>
            </li>
        );
    }
    console.log(activeMenu);
    return (
        <>
            {/* <SwitchTransition mode='out-in'> */}
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                ref={nodeRef}>
                <ul className="mobileMenu">
                    {menudb.map((e,i) => (
                        <>
                            <DropdownItem
                                goToMenu={e?.title}
                                classNames={e?.classname}
                                key={i}
                                submenuitems={e}>
                                {e?.title}
                            </DropdownItem>
                        </>
                    ))}
                </ul>
            </CSSTransition>
            {/* </SwitchTransition> */}


            {menudb.map((e,i) => (
                <>
                    <CSSTransition
                        in={activeMenu === `${e?.header}`}
                        timeout={500}
                        classNames="menu-secondary"
                        unmountOnExit>
                        <>
                            {
                                e?.submenu.map((el,i) => (
                                    <DropdownItem
                                        key={i}
                                        goToMenu={el?.header}>
                                        {el?.header}
                                    </DropdownItem>
                                ))
                            }
                        </>
                    </CSSTransition>
                </>
            ))}
            <CSSTransition
                in={activeMenu === 'MAN'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit>
                <ul className="mobileMenu">
                    <DropdownItem goToMenu="main" >
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem >HTML</DropdownItem>
                    <DropdownItem >CSS</DropdownItem>
                    <DropdownItem >JavaScript</DropdownItem>
                    <DropdownItem >Awesome!</DropdownItem>
                </ul>
            </CSSTransition>
        </>

    );
};

export default MobileDropDown;
