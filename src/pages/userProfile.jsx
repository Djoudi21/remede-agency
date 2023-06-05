import Layout from "../components/Layout";
import stylesIndex from "../assets/css/index.module.scss";
import AccountSection from "../components/AccountSection";
import EditProfile from "../components/EditProfile";
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import UserService from "../services/UserService";
import AxiosUserRepository from "../services/repositories/axiosUserRepository";
import {setFullName} from "../store/userSlice";



const accountSections = [
    {title: "Argent Bank Checking (x8349)", amount: "$2,082.79", description: "Available Balance"},
    {title: "Argent Bank Credit Card (x8349)", amount: "$184.30", description: "Available Balance"},
    {title: "Argent Bank Savings (x6712)", amount: "$10,928.42", description: "Current Balance"},
]

export default function UserProfile() {
    const navigate = useNavigate();
    const token = useSelector(state => state.user.token)
    const isUpdating = useSelector(state => state.user.isUpdating)
    const fullName = useSelector(state => state.user.fullName)
    const axiosRepository = new AxiosUserRepository()
    const userService = new UserService(axiosRepository)
    const dispatch = useDispatch()

    useEffect(  () => {
        if (!token) {
            return navigate('/sign-in')
        }

        // declare the data fetching function
        const fetchData = async () => {
            const data = await userService.getUserProfile(token)
            const name = `${data.body.firstName} ${ data.body.lastName}`
            dispatch(setFullName(name))
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [])

    return (
        <Layout>
            <main className={`${stylesIndex.main}`}>
                <div className={`${stylesIndex.header}`}>
                    <h1>Welcome back<br/>{fullName.length ? fullName : 'Tony Jarvis'}!</h1>
                    <EditProfile isEditing={isUpdating} />
                </div>
                <h2 className={`${stylesIndex.srOnly}`}>Accounts</h2>
                {accountSections.map((section, index) => {
                   return (
                       <AccountSection title={section.title} key={index} />
                   )
                })}
            </main>
        </Layout>
    )
}
