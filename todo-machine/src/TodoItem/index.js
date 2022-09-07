import React from "react";
import './TodoItem.css'
function TodoItem(props){



    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
                 onClick={props.onComplete}//aqui estamos mandando a llamar al metodo que se encuentra en app.js que se llama onComplete
                
            >
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
           
            <span className="Icon Icon-delete"
                  onClick={props.onDelete}//aqui estamos mandando a llamar al metodo que se encuentra en app.js que se llama onDelete
            >
                X
            </span>
        </li>
    );
}
//<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
//{props.text}  //lo que  nos dice es que se crea una clase todoItem-p y que si hay un props.completed y es true se agregue otra clase llamada todoItem-p--completed
export {TodoItem};