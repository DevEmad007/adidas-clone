import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';

const ExtraLinks = () => {
    return (
        <ul className="additionalLinks">
            <NavItem>
                help
            </NavItem>
            <NavItem>
                orders and returns
            </NavItem>
            <NavItem>
                join adiClub
            </NavItem>
            <NavItem>
                🍕
            </NavItem>
        </ul>
    );
};

export default ExtraLinks;
