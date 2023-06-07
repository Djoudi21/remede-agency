import styles from "../assets/css/_Footer.module.scss";
import React from 'react';

export default function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <p className={`${styles.footerText}`}>Copyright 2020 Argent Bank</p>
        </footer>
    )
}
