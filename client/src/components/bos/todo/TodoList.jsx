import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {destroy, selectFilteredTodos, getTodosAsync, toggleTodoAsync, removeItemAsync} from '../../../redux/todos/todosSlice';
import Loading from "../../Loading";

function TodoList() {
    const dispatch = useDispatch();
    const filteredTodos = useSelector(selectFilteredTodos)
    const isLoading = useSelector((state) => state.todos.isLoading )

    useEffect(()=> {
        dispatch(getTodosAsync())
    },[dispatch])

    const handleDestroy = async (id) => {
        if(window.confirm("Are you sure")){
        await dispatch(removeItemAsync(id))
        }
    }

    const handleToggle = async (id, completed) => {
        await dispatch(toggleTodoAsync({id, data: { completed } }));
    }

    if(isLoading) {
        return <Loading />
    }

  return (
    <ul className ="todo-list">
        {filteredTodos.map((item) => {
           return (
            <li key={item.id} className={item.completed ? "completed" : ""}>
            <div className="view">
                <input 
                className="toggle" 
                type="checkbox" 
                checked={item.completed}
                onChange={() => handleToggle(item.id, !item.completed)}/>
                <label>{item.title}</label>
                <button
                onClick={() => handleDestroy(item.id)}
                 className="destroy"
                 >

                 </button>
            </div>
        </li>
           )
        })}
    </ul>
  )
}

export default TodoList