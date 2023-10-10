import React from 'react';
import NavItem from './NavItem';

const Submenu = ({ submenuitems }) => {
    return (
        <div className="subMenu">
            {
                submenuitems?.map((i,e) => (
                    <div className={`menuCol menu-col-${e + 1}`} key={e}>
                        <h4>{i?.header}</h4>
                        <ul>
                            {i?.links.map((e,i) => (
                                <NavItem key={i}> {e?.title}</NavItem>
                            ))}
                        </ul>
                    </div>
                ))
            }
            <div className="menu_footer menu_footer-1">Sales</div>
            <div className="menu_footer">All Men's SHOES</div>
            <div className="menu_footer">All Men's CLOTHING</div>
            <div className="menu_footer">All Men's ACCESSORIES</div>
            <div className="menu_footer">All Men's SPORTS</div>
            <div className="menu_footer">All Men's</div>
        </div>
    );
};

export default Submenu;
