import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNotes, removeNotes} from "../../../redux/notes/notesSlice";
import {nanoid} from "@reduxjs/toolkit";

export default function Notes() {
    const dispatch = useDispatch();
    const item = useSelector((state) => state.notes.items);
    const [value, setValue] = useState();
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleRemove = (id) => {
        dispatch(removeNotes(id))
    }
    const handleClick = () => {
        if (value === "") return null;
        dispatch(
            addNotes({
                id: nanoid(),
                desc: value,
            })
        );
        setValue("");
    };
    return (
        <>
            <input type="text" onChange={handleChange} value={value} />
            <button onClick={handleClick}>Add</button>
            <ul style={{ display: "flex", margin: 15, padding: 15 }}>
                {item.map((i) => {
                    return (
                        <div className="bg-card-red" key={i.id}>
                            <li style={{ listStyle: "none", display: "flex", justifyContent: "space-around" }}>
                                {i.desc}
                                <button onClick={() => handleRemove(i.id)}>delete</button>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </>
    )
}