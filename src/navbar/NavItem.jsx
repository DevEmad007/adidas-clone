import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ classNames,toThe,children,submenu }) => {
    return (
        <li>
            <Link
                className={`navLink ${classNames === undefined ?
                    '' : classNames}`}>
                {children}
            </Link>
            {submenu}
        </li>
    );
};

export default NavItem;
