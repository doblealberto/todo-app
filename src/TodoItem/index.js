import React from 'react';
import './TodoItem.css'

function TodoItem(props) {
    const completeTodo = (event) => {
        console.log(event.target.checked)
    }
    const deleteTodo = (event) => {
        console.log(event)
    }
    return(
        <li>
            <input 
                className="checkelement"
                type="checkbox"
                checked={props.completed}
                onChange={completeTodo}
                />
                {console.log(props.text)}
            <div className="todo-text">{props.text}</div>
            <span 
            className="fa fa-close" 
            onclick={deleteTodo}>x
            </span>
        </li>
    )
} 

export {TodoItem};