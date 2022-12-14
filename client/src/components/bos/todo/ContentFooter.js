import React from 'react'

import {useSelector, useDispatch} from "react-redux";
import {changeActiveFilter, clearCompleted, selectTodos} from "../../../redux/todos/todosSlice";

function ContentFooter() {

    const dispatch = useDispatch();

    const activeFilter = useSelector(state => state.todos.activeFilter)
    const items = useSelector(selectTodos)
    const itemsLeft = items.filter(item => !item.completed).length

  return (
    <footer className="footer">
    <span className="todo-count">
        <strong>{itemsLeft} </strong>
        {itemsLeft < 2 ? "item left" : "items left"}
    </span>

    <ul className="filters">
        <li>
            <a href="client/src/components/bos/todo/ContentFooter#/" className={activeFilter === "all" ? "selected" : ""} onClick={()=> dispatch(changeActiveFilter("all"))}>All</a>
        </li>
        <li>
            <a href="client/src/components/bos/todo/ContentFooter#/" className={activeFilter === "active" ? "selected" : ""} onClick={()=> dispatch(changeActiveFilter("active"))}>Active</a>
        </li>
        <li>
            <a href="client/src/components/bos/todo/ContentFooter#/" className={activeFilter === "completed" ? "selected" : ""} onClick={()=> dispatch(changeActiveFilter("completed"))}>Completed</a>
        </li>
    </ul>

    <button
        className="clear-completed"
        onClick={() => dispatch(clearCompleted())}>
        Clear completed
    </button>
</footer>
  )
}

export default ContentFooter