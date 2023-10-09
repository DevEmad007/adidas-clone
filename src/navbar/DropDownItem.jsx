import React from 'react';
import { Link } from 'react-router-dom';
import Submenu from './Submenu';

const DropDownItem = ({ classNames,toThe,children,submenuitems }) => {

    return (
        <li>
            <Link
                className={`navLink ${classNames === undefined ?
                    '' : classNames}`}>
                {children}
            </Link>
            <Submenu submenuitems={submenuitems?.submenu} />
        </li>
    );
};

export default DropDownItem;
