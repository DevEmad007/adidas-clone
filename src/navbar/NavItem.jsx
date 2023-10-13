import React from 'react';
import { Link } from 'react-router-dom';
import Submenu from './Submenu';

const NavItem = ({ classNames,toThe,children }) => {
    return (
        <li>
            <Link
                className={` ${classNames === undefined ?
                    '' : classNames}`}>
                {children}
            </Link>
        </li>
    );
};

export default NavItem;
