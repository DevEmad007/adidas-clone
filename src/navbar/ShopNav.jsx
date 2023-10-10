import React from 'react';
import NavItem from './NavItem';
import { FavoriteBorderOutlined,LocalMallOutlined,Menu,Person,PersonAddAltOutlined,PersonOutlineOutlined,Search,ShoppingCartOutlined } from '@mui/icons-material';

const ShopNav = () => {
    return (
        <>
            <div className="shopNav">
                <div className="inputContainer">
                    <input placeholder="Search" type="text" />
                    <Search />
                </div>
                <ul className="shopNavList">
                    <NavItem classNames={'person'}>
                        <PersonOutlineOutlined />
                        <span className="Count">1</span>
                    </NavItem>
                    <NavItem classNames={'favourite'}>
                        <FavoriteBorderOutlined />
                    </NavItem>
                    <NavItem classNames={'cart'}>
                        <LocalMallOutlined color="action" />
                    </NavItem>
                </ul>
            </div>
        </>
    );
};

export default ShopNav;
