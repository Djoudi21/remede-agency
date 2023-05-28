import Layout from "../components/Layout";
import styles from "../assets/css/_SignIn.module.scss";
import stylesIndex from "../assets/css/index.module.scss";
import {useEffect, useState} from "react";
import UserService from '../services/UserService'
import AxiosUserRepository from "../services/repositories/axiosUserRepository";

export default function SignIn() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const axiosUserRepository = new AxiosUserRepository()
    const userService = new UserService(axiosUserRepository)
    async function login(event) {
        event.preventDefault();
        await userService.signIn({username, password, rememberMe})
    }

    function toto(event) {
        setUsername(event.target.value)
    }

    function tutu(event) {
        setPassword(event.target.value)
    }

    function tata(event) {
        setRememberMe(event.target.value)
    }
    return (
        <Layout>
            <main className={`${styles.main} ${styles.bgDark}`}>
                <section className={`${styles.signInContent}`}>
                    <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
                    <h1>Sign In</h1>
                    <form onSubmit={login}>
                        <div className={`${stylesIndex.inputWrapper}`}>
                            <label htmlFor="username">Username</label
                            ><input onInput={toto} type="text" id="username"/>
                        </div>
                        <div className={`${stylesIndex.inputWrapper}`}>
                            <label htmlFor="password">Password</label
                            ><input onInput={tutu} type="password" id="password"/>
                        </div>
                        <div className={`${stylesIndex.inputRemember}`}>
                            <input onChange={tata} type="checkbox" id="remember-me"/><label htmlFor="remember-me"
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
