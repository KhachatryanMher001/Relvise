import React from 'react';
import classes from './Layout.module.scss'
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";

const Layout = () => {
    return (
        <div className={classes.wrapper}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Layout;