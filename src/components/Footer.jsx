import styles from "../css/_Footer.module.scss";

export default function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <p className={`${styles.footerText}`}>Copyright 2020 Argent Bank</p>
        </footer>
    )
}
