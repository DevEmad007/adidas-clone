import { useState } from "react";
import NavItem from "./NavItem";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Link } from "react-router-dom";

const DropDownItemSecondery = (props) => {

    const { submenu,goToMenu,activeLink,setActiveMenu,setActiveLink,activeLinkBefore } = props;

    return (
        <li>
            <button onClick={() => {
                props.setActiveMenu('links');
                props.goToMenu && setActiveLink(goToMenu);
            }}>
                <span style={{ display: 'flex',alignItems: 'center',gap: '14px' }}>
                    {props.iconLeft}
                    {props.children}
                </span>
                {props.iconRight}
            </button>
            <div
                className={` seconderyLinks
              ${activeLink === submenu?.header ? 'showSeconderyLinks' : 'hideSeconderyLinks'}`}
            >
                <ul>
                    <button onClick={() => {
                        setActiveMenu('second');
                        setActiveLink(activeLinkBefore);
                    }}>
                        <span style={{ display: 'flex',alignItems: 'center',gap: '14px' }}>
                            <ArrowBackIosNew />
                            {submenu?.header}
                        </span>
                    </button>
                    {
                        submenu.links &&
                        submenu.links.map((e,i) => (
                            <li key={i}>
                                <Link>
                                    {e.title}
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </li>
    );
};

export default DropDownItemSecondery;
