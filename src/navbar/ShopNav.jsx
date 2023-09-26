import React from 'react';
import NavItem from './NavItem';
import { FavoriteBorderOutlined,LocalMallOutlined,Search,ShoppingCartOutlined } from '@mui/icons-material';

const ShopNav = () => {
    return (
        <>
            <div className="shopNav">
                <div className="inputContainer">
                    <input placeholder="Search" type="text" />
                    <Search />
                </div>
                <ul className="shopNavList">
                    <NavItem>
                        <ShoppingCartOutlined />
                        <span className="cartCount">1</span>
                    </NavItem>
                    <NavItem>
                        <FavoriteBorderOutlined />
                    </NavItem>
                    <NavItem>
                        <LocalMallOutlined />
                    </NavItem>
                </ul>
            </div>
        </>
    );
};

export default ShopNav;
