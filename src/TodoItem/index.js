import React from 'react';
import './TodoItem.css'

function TodoItem(props) {
    return(
        <li>
            <input className="checkelement" type="checkbox"/>
            {console.log(props.text)}
            <div className="todo-text">{props.text}</div>
            <span className="fa fa-close">x</span>
        </li>
    )
} 

export {TodoItem};