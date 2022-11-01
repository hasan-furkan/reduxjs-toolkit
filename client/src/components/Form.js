import {useState} from "react";
import {useDispatch} from "react-redux";
import {addContact} from "../redux/contacts/contactsSlice";
import {nanoid} from "@reduxjs/toolkit";

export default function Form() {
    const dispatch = useDispatch();
    const [name, setName] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact({id: nanoid(), name}))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </form>
        </>
    )
}