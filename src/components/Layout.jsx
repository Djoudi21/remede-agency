import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import stylesIndex from "../assets/css/index.module.scss";
import { useLocation } from 'react-router-dom';


export default function Layout ({children}) {
    const location = useLocation();

    function getBgColor() {
        if(location.pathname !== '/') {
            return stylesIndex.bgDark
        }
    }

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
