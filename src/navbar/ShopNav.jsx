import React from 'react';
import NavItem from './NavItem';
import { FavoriteBorderOutlined,LocalMallOutlined,Person,PersonAddAltOutlined,PersonOutlineOutlined,Search,ShoppingCartOutlined } from '@mui/icons-material';

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
                    <NavItem>
                        <FavoriteBorderOutlined />
                    </NavItem>
                    <NavItem>
                        <LocalMallOutlined color="action" />
                    </NavItem>
                </ul>
            </div>
        </>
    );
};

export default ShopNav;
