import { useState } from "react";
import NavItem from "./NavItem";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Link } from "react-router-dom";

const DropDownItemSecondery = (props) => {
    const { submenu,goToMenu,activeLink,setActiveMenu,setActiveLink,activeLinkBefore,activeBefore,setActiveBefore } = props;
    console.log(activeBefore);
    return (
        <li>
            <button onClick={() => {
                props.setActiveMenu('links');
                goToMenu && setActiveLink(goToMenu);
            }}>
                <span style={{ display: 'flex',alignItems: 'center',gap: '14px' }}>
                    {props.iconLeft}
                    {props.children}
                </span>
                {props.iconRight}
            </button>
            <div
                className={
                    ` seconderyLinks
              ${activeLink === submenu?.header || activeBefore === submenu?.header ? '' : 'hideSeconderyLinks'}`
                }
            >
                <ul>
                    <button className="bold" onClick={() => {
                        setActiveMenu('second');
                        setActiveLink(activeLinkBefore);
                    }}>
                        <span style={{ display: 'flex',alignItems: 'center',gap: '14px',textTransform: 'uppercase' }}>
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
