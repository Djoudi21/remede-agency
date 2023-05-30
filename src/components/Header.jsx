import styles from "../assets/css/_Header.module.scss";
import stylesIndex from "../assets/css/index.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoggedIn} from "../store/userSlice";
import logo from "../assets/img/argentBankLogo.png"


export default function Header() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const dispatch = useDispatch()

    function logOut() {
        if(isLoggedIn) {
            dispatch(setIsLoggedIn())
            navigate('/')
        }
    }
    return (
        <nav className={`${styles.mainNav}`}>
            <Link to={'/'} className={`${stylesIndex.flexCenter}`}>
                <img
                    className={`${styles.mainNavLogoImage}`}
                    src={logo}
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
