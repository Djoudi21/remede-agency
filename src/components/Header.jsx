import styles from "../css/_Header.module.scss";
import stylesIndex from "../css/index.module.scss";

export default function Header() {
    return (
        // <div>toto</div>
        <nav className={`${styles.mainNav}`}>
            <a className={`${styles.mainNavLogo}`} href="../../public/index.html">
                {/*<img*/}
                {/*    className={`${styles.mainNavLogoImage}`}*/}
                {/*    src="./img/argentBankLogo.png"*/}
                {/*    alt="Argent Bank Logo"*/}
                {/*/>*/}
                <h1 className={`${stylesIndex.srOnly}`}>Argent Bank</h1>
            </a>
            <div>
                <a className={`${styles.mainNavItem}`} href="../../public/index.html">
                {/*<a className={`${styles.mainNavItem}`} href="./sign-in.html">*/}
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </nav>
    )
}
