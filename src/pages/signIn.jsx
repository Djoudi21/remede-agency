import Layout from "../components/Layout";
import styles from "../assets/css/_SignIn.module.scss";
import stylesIndex from "../assets/css/index.module.scss";
import { useSelector, useDispatch } from 'react-redux'
import {setIsLoggedIn, setToken} from '../store/userSlice'
import {useState} from "react";
import UserService from '../services/UserService'
import AxiosUserRepository from "../services/repositories/axiosUserRepository";
import {useNavigate} from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => !!state.user.value)
    const dispatch = useDispatch()
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const axiosUserRepository = new AxiosUserRepository()
    const userService = new UserService(axiosUserRepository)
    async function login(event) {
        event.preventDefault();
        const res = await userService.signIn({email, password, rememberMe})
        if(res.data.status && res.data.status === 200) {
            const token = res.data.body.token
            dispatch(setToken(token))
            dispatch(setIsLoggedIn())
            navigate('/user/profile')
        }
    }

    function setEmailInputValue(event) {
        setEmail(event.target.value)
    }

    function setPasswordInputValue(event) {
        setPassword(event.target.value)
    }

    function setRememberMeInoutValue(event) {
        setRememberMe(event.target.value)
    }
    return (
        <Layout>
            <main className={`${stylesIndex.main} ${stylesIndex.bgDark} ${stylesIndex.flexCenter} ${stylesIndex.toto}`}>
                <section className={`${styles.signInContent}`}>
                    <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
                    {isLoggedIn ?  <h1>Sign Out</h1>  : <h1>Sign In</h1>}
                    <form onSubmit={login}>
                        <div className={`${stylesIndex.inputWrapper}`}>
                            <label htmlFor="email">Username</label
                            ><input onInput={setEmailInputValue} type="text" id="email"/>
                        </div>
                        <div className={`${stylesIndex.inputWrapper}`}>
                            <label htmlFor="password">Password</label
                            ><input onInput={setPasswordInputValue} type="password" id="password"/>
                        </div>
                        <div className={`${stylesIndex.inputRemember}`}>
                            <input onChange={setRememberMeInoutValue} type="checkbox" id="remember-me"/><label htmlFor="remember-me"
                        >Remember me</label
                        >
                        </div>
                        <button  type="submit"  className={`${styles.signInButton}`}>Sign In</button>
                    </form>
                </section>
            </main>
        </Layout>
    )
}
