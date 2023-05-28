import styles from "../assets/css/_Header.module.scss";
import stylesIndex from "../assets/css/index.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoggedIn} from "../store/logInSlice";


export default function Header() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.logIn.value)
    const dispatch = useDispatch()
    function logOut() {
        if(isLoggedIn) {
            dispatch(setIsLoggedIn())
            navigate('/')
        }
    }
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
            <Link className={`${styles.mainNavItem}`} onClick={logOut} to={'/sign-in'}>
                <i className="fa fa-user-circle"></i>
                {isLoggedIn ? 'Sign Out': 'Sign In'}
            </Link>
        </nav>
    )
}
