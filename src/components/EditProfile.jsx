import styles from '../assets/css/_EditProfile.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import UserService from '../services/UserService'
import AxiosUserRepository from "../services/repositories/axiosUserRepository";
import {useState} from "react";
import {setFullName, setIsUpdating} from "../store/userSlice";
export default function  EditProfile({isEditing}) {
    const dispatch = useDispatch()
    const token = useSelector(state => state.user.token)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const axiosUserRepository = new AxiosUserRepository()
    const userService = new UserService(axiosUserRepository)
    function toggleIsEditing() {
        dispatch(setIsUpdating())
    }

    async function useSubmit(event) {
        event.preventDefault();
        const res = await userService.updateUserProfile({firstname, lastname, token})
        const fullName = `${res.body.firstName} ${res.body.lastName}`
        dispatch(setFullName(fullName))
        dispatch(setIsUpdating())
    }

    function setFirstnameValue(event) {
        setFirstname(event.target.value)
    }

    function setLastnameValue(event) {
        setLastname(event.target.value)
    }
    return(
        <>
            {isEditing ? (
                <div className={`${styles.editForm}`}>
                    <div className={`${styles.editFormSection}`}>
                        <input placeholder='Enter firstname' onInput={setFirstnameValue} type="text"/>
                        <button className={`${styles.editButton}`} onClick={useSubmit}>Save</button>

                    </div>
                    <div  className={`${styles.editFormSection}`}>
                        <input placeholder='Enter lastname' onInput={setLastnameValue} type="text"/>
                        <button className={`${styles.editButton}`} onClick={toggleIsEditing}>Cancel</button>
                    </div>
                </div>
            ) : (
                <button onClick={toggleIsEditing} className={`${styles.editButton}`}>Edit Name</button>
            )
            }
        </>
    )
}
