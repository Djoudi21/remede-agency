import styles from "../assets/css/_Header.module.scss";
import stylesIndex from "../assets/css/index.module.scss";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Header() {
    const isLoggedIn = useSelector(state => state.logIn.value)

    return (
        <nav className={`${styles.mainNav}`}>
            <Link to={'/'} className={`${styles.mainNavLogo}`}>
                <img
                    className={`${styles.mainNavLogoImage}`}
                    src="../assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className={`${stylesIndex.srOnly}`} >Argent Bank</h1>
            </Link>
            <Link className={`${styles.mainNavItem}`} to={'/sign-in'}>
                <i className="fa fa-user-circle"></i>
                {isLoggedIn ? 'Sign In' : 'Sign Out'}
            </Link>
        </nav>
    )
}
