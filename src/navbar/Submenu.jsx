import React from 'react';
import NavItem from './NavItem';

const Submenu = () => {
    return (
        <div className="subMenu">
            <div className="menuCol menu-col-1">
                <h4>NEW & TRENDING</h4>
                <ul>
                    <NavItem> New Arrival</NavItem>
                    <NavItem>Best seller</NavItem>
                    <NavItem>Pre-Oreder Messi Miami CF Jersey</NavItem>
                    <NavItem>Pink Summer</NavItem>
                    <NavItem>Samba Tones by Pharrell</NavItem>
                    <NavItem>Gift Cards</NavItem>
                    <NavItem>Ultraboost 1.0</NavItem>
                    <NavItem>Back to School</NavItem>
                    <NavItem>Only at adidas</NavItem>
                    <NavItem>Release Dates</NavItem>
                </ul>
            </div>
            <div className="menuCol menu-col-2">
                <h4>SHOES</h4>
                <ul>
                    <NavItem>Sneakers</NavItem>
                    <NavItem>Running</NavItem>
                    <NavItem>soccer</NavItem>
                    <NavItem>Lifestyle</NavItem>
                    <NavItem>Workout & Gym</NavItem>
                    <NavItem>Hiking</NavItem>
                    <NavItem>Basketball</NavItem>
                    <NavItem>Golf</NavItem>
                    <NavItem>Baseball</NavItem>
                    <NavItem>Football</NavItem>
                </ul>
            </div>
            <div className="menuCol menu-col-3">
                <h4>CLOTHING</h4>
                <ul>
                    <NavItem>T-Shirt and Tops</NavItem>
                    <NavItem>Hoodies & Sweatshiets</NavItem>
                    <NavItem>Shorts</NavItem>
                    <NavItem>Pants</NavItem>
                    <NavItem>Jackets</NavItem>
                    <NavItem>Tracksuits</NavItem>
                    <NavItem>Matching Set</NavItem>
                    <NavItem>Jerseys</NavItem>
                    <NavItem>Tall</NavItem>
                </ul>
            </div>
            <div className="menuCol menu-col-4">
                <h4>ACCESSORIES</h4>
                <ul>
                    <NavItem>Accessories</NavItem>
                    <NavItem>Bags & Backpacks </NavItem>
                    <NavItem>Balls</NavItem>
                    <NavItem>Gloves</NavItem>
                    <NavItem>Hats & Beanies </NavItem>
                    <NavItem>Socks</NavItem>
                    <NavItem>Headphones</NavItem>
                    <NavItem>Underwear</NavItem>
                    <NavItem>Water Bottels</NavItem>
                </ul>
            </div>
            <div className="menuCol menu-col-5">
                <h4>SHOP BY SPORTS</h4>
                <ul>
                    <NavItem>Basketball</NavItem>
                    <NavItem>Baseball</NavItem>
                    <NavItem>Swim</NavItem>
                    <NavItem>Cycling</NavItem>
                    <NavItem>Soccer</NavItem>
                    <NavItem>Football</NavItem>
                    <NavItem>Tenis</NavItem>
                    <NavItem>Workout</NavItem>
                    <NavItem>Yoga</NavItem>
                    <NavItem>Golf</NavItem>
                    <NavItem>Hockey</NavItem>
                    <NavItem>Outdoor</NavItem>
                </ul>
            </div>
            <div className="menuCol menu-col-6">
                <h4>SHOP BY COLLECTION</h4>
                <ul>
                    <NavItem>Orginal</NavItem>
                    <NavItem>Samba</NavItem>
                    <NavItem>Sports wear</NavItem>
                    <NavItem>Y-3</NavItem>
                    <NavItem>TRRax</NavItem>
                    <NavItem>Ultraboost</NavItem>
                </ul>
            </div>
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
