import styles from "../assets/css/_Header.module.scss";
import stylesIndex from "../assets/css/index.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoggedIn} from "../store/userSlice";
import logo from "../assets/img/argentBankLogo.png"
import LoginIconAndText from "./LoginIconAndText";
import LogoutIconAndText from "./LogoutIconAndText";
import Icon from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';


export default function Header() {
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const fullName = useSelector(state => state.user.fullName)
    const dispatch = useDispatch()

    function logOut(event) {
        event.preventDefault()
        dispatch(setIsLoggedIn())
        navigate('/')
    }
    return (
        <nav className={`${styles.mainNav}`}>
            <Link to={'/'}  className={`${stylesIndex.flexCenter}`}>
                <img
                    className={`${styles.mainNavLogoImage}`}
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className={`${stylesIndex.srOnly}`} >Argent Bank</h1>
            </Link>
            {isLoggedIn ? (
                <>
                    <Link className={`${styles.mainNavItem}`} to={'/user/profile'}>
                        <div className={`${stylesIndex.flexCenter}`}>
                            <Icon path={mdiAccountCircleOutline} size={1} />
                            <span>{fullName ? fullName : 'Tony'}</span>
                        </div>
                    </Link>
                    <Link className={`${styles.mainNavItem}`} onClick={logOut} to={'/'}>
                        <div className={`${stylesIndex.ml10}`}>
                            <LogoutIconAndText />
                        </div>
                    </Link>
                </>
                ) : (
                <Link className={`${styles.mainNavItem}`} to={'/sign-in'}>
                    <LoginIconAndText/>
                </Link>
                )}
        </nav>
    )
}
