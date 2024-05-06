import React from 'react';
import classes from './Header.module.scss'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes._container}>
                <div className={classes.header_container}>
                    <div className={classes.headerLogoWrapper}>
                        <a href="" className={classes.header_logo}>Relvise</a>
                    </div>
                    <nav className={classes.nav_menu}>
                        <ul className={classes.header_list}>
                            <li className={classes.item_li}>
                                <a href="" className={classes.header_link}>Home</a>
                            </li>
                            <li className={classes.item_li}>
                                <a href="" className={classes.header_link}>Product</a>
                            </li>
                            <li className={classes.item_li}>
                                <a href="" className={classes.header_link}>Pricing</a>
                            </li>
                            <li className={classes.item_li}>
                                <a href="" className={classes.header_link}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>

        </header>

    );
};

export default Header;