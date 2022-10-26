import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {addTodosAsync} from "../../../redux/todos/todosSlice"
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!title) return alert("todo ekleyiniz")

   await dispatch(addTodosAsync({ title }))

    setTitle("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
