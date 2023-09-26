import React from 'react';
import NavItem from '../../navbar/NavItem';
const FooterColumn = () => {
    return (
        <div>
            <h3>Porducts</h3>
            <ul>
                <NavItem>
                    Shoes
                </NavItem>
                <NavItem>
                    Clothing
                </NavItem>
                <NavItem>
                    Gift Cards
                </NavItem>
                <NavItem>
                    Accessories
                </NavItem>
                <NavItem>
                    New Arrivals
                </NavItem>
                <NavItem>
                    Best Sellers
                </NavItem>
                <NavItem>
                    Release Dates
                </NavItem>
                <NavItem>
                    Black Friday Deals
                </NavItem>
                <NavItem>
                    Sale
                </NavItem>
            </ul>
        </div>
    );
};

export default FooterColumn;
