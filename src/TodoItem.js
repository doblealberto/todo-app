import React from 'react';

function TodoItem(props) {
    return(
        <li>
            <span>C</span>
            {console.log(props.text)}
            <p>{props.text}</p>
            <span>x</span>
        </li>
    )
} 

export {TodoItem};