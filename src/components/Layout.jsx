import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import stylesIndex from "../assets/css/index.module.scss";
import { useLocation } from 'react-router-dom';


export default function Layout ({children}) {
    const location = useLocation();

    /**
     * Get the background color based on the current location.
     * @returns {string} The CSS class for the background color.
     */
    function getBgColor() {
        if(location.pathname !== '/') {
            return stylesIndex.bgDark
        }
    }

    /**
     * Get the CSS class for displaying the container with flex center alignment.
     * @returns {string} The CSS class for flex center alignment.
     */
    function getDisplayFlex() {
        if(location.pathname === '/sign-in') {
            return stylesIndex.flexCenter
        }
    }

    return(
        <>
            <Header />
            <div className={`${stylesIndex.heightMainContainer} ${getBgColor()} ${getDisplayFlex()}`}>{children}</div>
            <Footer />
        </>
    )
}
